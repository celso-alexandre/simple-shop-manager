import { Directive, ObjectType } from '@nestjs/graphql';
import { ProviderOrder as GeneratedProviderOrder } from '@Prisma/index';

@ObjectType()
@Directive('@key(fields: "id")')
export class ProviderOrder extends GeneratedProviderOrder {}
