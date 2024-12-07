import {
  ExceptionFilter,
  Catch,
  ConflictException,
  HttpException,
} from '@nestjs/common';
import { upperFirst } from 'lodash';
import { buildNestException } from './build-nest-exception';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

// type PrismaErrorMeta = {
//   cause?: string;
//   details?: string;
//   target?: string[];
//   field_name?: string;
// };
@Catch(PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  private domain: string;

  private debugging: boolean;

  private P2002_message_regEx = /((prisma\.)(\w+))/g;

  // private P2025_fk_not_found_regEx =
  //   /^No '([a-zA-Z]+)' record\(s\) \(needed to inline the relation on '([a-zA-Z]+)' record\(s\)\) was found for a nested connect on (one-to-one|one-to-many) relation '[a-zA-Z]+'.$/;

  // private P2025_pk_not_found_regEx =
  //   /^Invalid [\s\S].*prisma.([A-Za-z]+).(update|create)\(\)`[\s\S].*$/;

  // private P2025_pk_not_found_regEx2 = /^No ([^\s]+) found/;

  // private P2018_meta_detail_regEx =
  //   /^Expected 1 records to be connected after connect operation on one-to-many relation '([a-zA-Z]+)', found 0.$/;

  constructor(domain: string, debugging = false) {
    this.domain = domain;
    this.debugging = debugging;
  }

  handlers = {
    P2002: (exception: PrismaClientKnownRequestError) => {
      // Unique constraint failed on the {constraint}
      const { message, meta } = exception;
      const { target } = meta as { target: string };
      const regExResult = this.P2002_message_regEx.exec(
        message?.replace(/\n/g, ''),
      );
      const [modelName] = regExResult;
      const modelOrig = modelName?.replace('prisma.', '') ?? '';
      const parent = upperFirst(modelOrig);
      const targetFields = target.split('_');
      const orderedTarget = (
        targetFields?.filter((x, i) => {
          return i > 0 && i + 1 < targetFields.length;
        }) ||
        []
      ).sort((a, b) => {
        return (a > b ? 1 : b > a ? -1 : 0);
      });
      if (!parent || !orderedTarget.length) throw exception;
      const error = buildNestException(
        `${parent}_UQ_${orderedTarget.join('_')}_conflict`,
        ConflictException,
      );
      error.stack = exception.stack;
      throw error;
    },

    // P2003: (exception: PrismaClientKnownRequestError) => {
    //   // Foreign key constraint failed on the field: {field_name}
    //   const { meta } = exception;
    //   const errorMeta = _.cloneDeep(meta) as PrismaErrorMeta;

    //   const [parent, fieldName] = errorMeta.field_name.split('_');
    //   /**
    //    * TODO: It is currently converting FK fieldName to FK tableName, which is not 100% trustable
    //    * Maybe a better approuch would be to pass a list of conversion from table constraintName to FK tableName?
    //    */
    //   const child = _.upperFirst(fieldName)
    //     .replace('Id', '')
    //     .replace('Code', '');
    //   if (!parent || !child) throw exception;
    //   const error = buildNestException(
    //     this.domain,
    //     `${parent}_${child}_notFound`,
    //     NotFoundException,
    //   );
    //   error.stack = exception.stack;
    //   throw error;
    // },

    // P2018: (exception: PrismaClientKnownRequestError) => {
    //   // The required connected records were not found. {details}
    //   const { meta } = exception;
    //   const errorMeta = _.cloneDeep(meta) as PrismaErrorMeta;
    //   const regExResult = this.P2018_meta_detail_regEx.exec(errorMeta.details);
    //   const relation = regExResult[1];
    //   // TODO: This split can be dangerous. Change it
    //   const [parent, child] = relation.split('To');
    //   if (!parent || !child) throw exception;
    //   const error = buildNestException(
    //     this.domain,
    //     `${parent}_${child}_notFound`,
    //     NotFoundException,
    //   );
    //   error.stack = exception.stack;
    //   throw error;
    // },

    // P2025: (exception: PrismaClientKnownRequestError) => {
    //   // An operation failed because it depends on one or more records that were required but not found. {cause}
    //   const { message, meta } = exception || {};
    //   const errorMeta = _.cloneDeep(meta ?? {}) as PrismaErrorMeta;

    //   // const operation = this.extractOperationFromMessage(message, errorMeta.cause);
    //   const regExFkNotFoundRes = this.P2025_fk_not_found_regEx.exec(
    //     errorMeta.cause,
    //   );

    //   // eslint-disable-next-line prefer-const
    //   let [, child, parent] = regExFkNotFoundRes ?? [];
    //   if (!parent) {
    //     const regExPkNotFoundRes = this.P2025_pk_not_found_regEx.exec(
    //       message?.replace(/\n/g, ''),
    //     );
    //     parent = _.upperFirst(regExPkNotFoundRes?.[1]);
    //   }

    //   if (!parent) {
    //     const regExPkNotFoundRes = this.P2025_pk_not_found_regEx2.exec(
    //       message?.replace(/\n/g, ''),
    //     );
    //     parent = _.upperFirst(regExPkNotFoundRes?.[1]);
    //   }

    //   if (!parent) throw exception;

    //   if (parent && child) {
    //     const error = buildNestException(
    //       this.domain,
    //       `${parent}_${child}_notFound`,
    //       NotFoundException,
    //     );
    //     throw error;
    //   }

    //   const error = buildNestException(
    //     this.domain,
    //     `${parent}_PK_notFound`,
    //     NotFoundException,
    //   );
    //   error.stack = exception.stack;
    //   throw error;
    // },
  };

  catch(exception: PrismaClientKnownRequestError) {
    if (this.debugging) {
      console.error('PrismaExceptionFilter code', exception?.code);
      console.error('PrismaExceptionFilter message', exception?.message);
      console.error('PrismaExceptionFilter meta', exception?.meta);
    }
    if (!this.domain) throw exception;

    try {
      // eslint-disable-next-line no-prototype-builtins
      const hasHandler = this.handlers.hasOwnProperty(exception.code);
      if (!hasHandler) throw exception;
      this.handlers[exception.code](exception);
    } catch (error) {
      const isHandled = error instanceof HttpException;
      if (this.debugging) console.log({ isHandled, message: error.message });
      if (!isHandled) throw exception;
      throw error;
    }
  }
}
