import { Module } from '@nestjs/common';
import { ProductAggregateResolver } from './resolver';
import { ProductAggregateService } from './service';

@Module({
  providers: [ProductAggregateResolver, ProductAggregateService],
  exports: [ProductAggregateService]
})
export class ProductAggregateModule {}
