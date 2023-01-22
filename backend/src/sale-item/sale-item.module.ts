import { Module } from '@nestjs/common';
import { SaleItemResolver } from './sale-item.resolver';
import { SaleItemService } from './sale-item.service';

@Module({
  providers: [SaleItemResolver, SaleItemService],
  exports: [SaleItemService],
})
export class SaleItemModule {}
