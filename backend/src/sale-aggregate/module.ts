import { Module } from '@nestjs/common';
import { SaleAggregateResolver } from './resolver';
import { SaleAggregateService } from './service';

@Module({
  providers: [SaleAggregateResolver, SaleAggregateService],
  exports: [SaleAggregateService]
})
export class SaleAggregateModule {}
