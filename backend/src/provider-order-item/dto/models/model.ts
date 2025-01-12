import { Directive, ObjectType } from '@nestjs/graphql';
import { ProviderOrderItem as GeneratedProviderOrderItem } from '@Prisma/index';

@ObjectType()
@Directive('@key(fields: "id")')
export class ProviderOrderItem extends GeneratedProviderOrderItem {}
