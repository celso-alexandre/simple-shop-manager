import { ConflictException, NotFoundException } from '@nestjs/common';

const domain = 'main';
export function buildNestException<T>(
  message: keyof T,
  ErrorClass: typeof ConflictException | typeof NotFoundException,
  params?: object,
) {
  return new ErrorClass(
    `${domain}|${message as string}${
      !params ? '' : `|${JSON.stringify(params)}`
    }`,
  );
}
