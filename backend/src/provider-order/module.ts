import { Module } from '@nestjs/common';
import { ProviderOrderResolver } from './resolver';
import { ProviderOrderService } from './service';

@Module({
  providers: [ProviderOrderResolver, ProviderOrderService],
  exports: [ProviderOrderService]
})
export class ProviderOrderModule {}
