import { Module } from '@nestjs/common';
import { FinancialMovementResolver } from './resolver';
import { FinancialMovementService } from './service';

@Module({
  providers: [FinancialMovementResolver, FinancialMovementService],
  exports: [FinancialMovementService]
})
export class FinancialMovementModule {}
