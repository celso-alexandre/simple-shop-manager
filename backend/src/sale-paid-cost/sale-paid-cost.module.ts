import { Module } from '@nestjs/common';
import { SalePaidCostResolver } from './sale-paid-cost.resolver';
import { SalePaidCostService } from './sale-paid-cost.service';

@Module({
  providers: [SalePaidCostResolver, SalePaidCostService],
  exports: [SalePaidCostService],
})
export class SalePaidCostModule {}
