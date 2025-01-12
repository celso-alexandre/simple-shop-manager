import { Directive, ObjectType } from '@nestjs/graphql';
import { FinancialMovement as GeneratedFinancialMovement } from '@Prisma/index';

@ObjectType()
@Directive('@key(fields: "id")')
export class FinancialMovement extends GeneratedFinancialMovement {}
