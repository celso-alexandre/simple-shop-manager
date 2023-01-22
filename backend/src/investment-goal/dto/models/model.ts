import { Directive, ObjectType } from '@nestjs/graphql';
import { InvestmentGoal as GeneratedInvestmentGoal } from '@Prisma/index';

@ObjectType()
@Directive('@key(fields: "id")')
export class InvestmentGoal extends GeneratedInvestmentGoal {}
