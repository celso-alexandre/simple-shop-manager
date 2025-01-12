import { Module } from '@nestjs/common';
import { FinancialMovementAggregateResolver } from './resolver';
import { FinancialMovementAggregateService } from './service';

@Module({
  providers: [
    FinancialMovementAggregateResolver,
    FinancialMovementAggregateService
  ],
  exports: [FinancialMovementAggregateService]
})
export class FinancialMovementAggregateModule {}
