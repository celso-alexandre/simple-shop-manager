import { Module } from '@nestjs/common';
import { ProviderResolver } from './provider.resolver';
import { ProviderService } from './provider.service';

@Module({
  providers: [ProviderResolver, ProviderService],
  exports: [ProviderService]
})
export class ProviderModule {}
