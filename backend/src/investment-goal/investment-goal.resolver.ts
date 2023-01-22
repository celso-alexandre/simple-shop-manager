import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import {
  CreateManyInvestmentGoalArgs,
  CreateOneInvestmentGoalArgs,
  DeleteManyInvestmentGoalArgs,
  DeleteOneInvestmentGoalArgs,
  FindManyInvestmentGoalArgs,
  FindUniqueInvestmentGoalArgs,
  UpdateOneInvestmentGoalArgs,
} from './dto';
import { InvestmentGoal } from './dto';
import { InvestmentGoalService } from './investment-goal.service';

@Resolver(() => InvestmentGoal)
export class InvestmentGoalResolver {
  constructor(private readonly service: InvestmentGoalService) {}

  @Query(() => InvestmentGoal, { name: 'investmentGoal' })
  findUnique(
    @Args() args: FindUniqueInvestmentGoalArgs,
  ): Promise<InvestmentGoal> {
    return this.service.findUnique(args);
  }

  @Query(() => [InvestmentGoal], { name: 'investmentGoals' })
  findMany(
    @Args() args: FindManyInvestmentGoalArgs,
  ): Promise<InvestmentGoal[]> {
    return this.service.findMany(args);
  }

  @Mutation(() => InvestmentGoal, { name: 'createInvestmentGoal' })
  createOne(
    @Args() args: CreateOneInvestmentGoalArgs,
  ): Promise<InvestmentGoal> {
    return this.service.createOne(args);
  }

  @Mutation(() => Boolean, { name: 'createInvestmentGoals' })
  createMany(@Args() args: CreateManyInvestmentGoalArgs): Promise<boolean> {
    return this.service.createMany(args);
  }

  @Mutation(() => InvestmentGoal, { name: 'updateInvestmentGoal' })
  updateOne(
    @Args() args: UpdateOneInvestmentGoalArgs,
  ): Promise<InvestmentGoal> {
    return this.service.updateOne(args);
  }

  @Mutation(() => InvestmentGoal, { name: 'deleteInvestmentGoal' })
  deleteOne(
    @Args() args: DeleteOneInvestmentGoalArgs,
  ): Promise<InvestmentGoal> {
    return this.service.deleteOne(args);
  }
}
