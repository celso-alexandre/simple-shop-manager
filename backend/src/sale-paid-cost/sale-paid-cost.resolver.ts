import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import {
  DeleteOneSalePaidCostArgs,
  FindManySalePaidCostArgs,
  FindUniqueSalePaidCostArgs,
  CreateOneSalePaidCostArgs,
  UpdateOneSalePaidCostArgs,
} from './dto';
import { SalePaidCost } from './dto';
import { SalePaidCostOutput } from './dto/output';
import { SalePaidCostService } from './sale-paid-cost.service';

@Resolver(() => SalePaidCost)
export class SalePaidCostResolver {
  constructor(private readonly service: SalePaidCostService) {}

  @Query(() => SalePaidCost, { name: 'salePaidCost' })
  findUnique(@Args() args: FindUniqueSalePaidCostArgs) {
    return this.service.findUnique(args);
  }

  @Query(() => SalePaidCostOutput, { name: 'salePaidCost' })
  findMany(@Args() args: FindManySalePaidCostArgs) {
    return this.service.findMany(args);
  }

  @Mutation(() => SalePaidCost, { name: 'createSalePaidCost' })
  createOne(@Args() args: CreateOneSalePaidCostArgs) {
    return this.service.createOne(args);
  }

  @Mutation(() => SalePaidCost, { name: 'deleteSalePaidCost' })
  deleteOne(@Args() args: DeleteOneSalePaidCostArgs) {
    return this.service.deleteOne(args);
  }

  @Mutation(() => SalePaidCost, { name: 'confirmSalePaidCost' })
  updateOne(@Args() args: UpdateOneSalePaidCostArgs) {
    return this.service.confirmOne(args);
  }
}
