import { Module } from '@nestjs/common';
import { InvestmentGoalResolver } from './investment-goal.resolver';
import { InvestmentGoalService } from './investment-goal.service';

@Module({
  providers: [InvestmentGoalResolver, InvestmentGoalService],
  exports: [InvestmentGoalService],
})
export class InvestmentGoalModule {}
