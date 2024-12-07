/* eslint-disable @typescript-eslint/no-unused-vars */
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

type RelationKeys = Uncapitalize<keyof typeof Prisma.ModelName>;

@Injectable()
export class PrismaService
  extends PrismaClient<Prisma.PrismaClientOptions, 'query'>
  implements OnModuleInit {
  constructor() {
    super({
      log: [
        {
          emit: 'event',
          level: 'query',
        },
      ],
    });
  }

  async onModuleInit() {
    await this.$connect();
  }
   
  async findManyPaginated<T extends RelationKeys, K extends PrismaClient[T]>(
    delegate: K,
    args: Parameters<K['findMany']>[0],
  ) {
    const { take, skip, cursor, select, ...remainingArgs } = args;
    const [queryResult, totalCount] = await Promise.all([
      (delegate as any).findMany(args),
      (delegate as any).count(remainingArgs),
    ]);

    const result = {
      nodes: queryResult,
      pageInfo: {
        total: totalCount,
        hasNextPage: take + skip < totalCount,
        currentPage: Math.ceil(skip / take) + 1 || 1,
        lastPage: Math.ceil(totalCount / take) || 1,
      },
    };

    return result;
  }

  async findRelationAndPaginate<
    T extends RelationKeys,
    K extends PrismaClient[T],
    S extends keyof Omit<
      ReturnType<K['findUnique']>,
      'then' | 'catch' | 'finally'
    >,
    R extends ReturnType<K['findUnique']>[S],
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    P extends Parameters<R>[0],
  >(model: K, id: number | string, subset: S, args: P) {
    const baseSet = (model.findUnique as any)({
      where: {
        id,
      },
      select: {
        _count: {
          select: { [subset]: true },
        },
      },
    });
    const { take, skip } = args as {
      take: number;
      skip: number;
      cursor: string;
    };
    const subSet = baseSet[subset](args);
    const [, queryResult] = await Promise.all([baseSet, subSet]);
    const count: number = queryResult?.length ?? 0;

    const result = {
      nodes: queryResult,
      pageInfo: {
        total: count,
        hasNextPage: take + skip < count,
        currentPage: Math.ceil(skip / take) + 1 || 1,
        lastPage: Math.ceil(count / take) || 1,
      },
    };

    return result;
  }

  enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit' as any, () => {
      return app.close();
    });
  }
}
