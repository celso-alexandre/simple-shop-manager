import { Resolver, Args, Query } from '@nestjs/graphql';
import { FindManySalePaidCostArgs, FindUniqueSalePaidCostArgs } from './dto';
import { SalePaidCost } from './dto';
import { SalesOutput } from './dto/output';
import { SalePaidCostService } from './sale-paid-cost.service';

@Resolver(() => SalePaidCost)
export class SalePaidCostResolver {
  constructor(private readonly service: SalePaidCostService) {}

  @Query(() => SalePaidCost, { name: 'sale-paid-cost' })
  findUnique(@Args() args: FindUniqueSalePaidCostArgs) {
    return this.service.findUnique(args);
  }

  @Query(() => SalesOutput, { name: 'sales' })
  findMany(@Args() args: FindManySalePaidCostArgs) {
    return this.service.findMany(args);
  }
}
