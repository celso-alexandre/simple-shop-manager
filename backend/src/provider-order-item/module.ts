import { Module } from '@nestjs/common';
import { ProviderOrderItemResolver } from './resolver';
import { ProviderOrderItemService } from './service';

@Module({
  providers: [ProviderOrderItemResolver, ProviderOrderItemService],
  exports: [ProviderOrderItemService]
})
export class ProviderOrderItemModule {}
