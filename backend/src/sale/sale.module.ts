import { Module } from '@nestjs/common';
import { SaleResolver } from './sale.resolver';
import { SaleService } from './sale.service';

@Module({
  providers: [SaleResolver, SaleService],
  exports: [SaleService],
})
export class SaleModule {}
