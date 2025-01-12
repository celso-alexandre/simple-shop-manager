import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { join } from 'path';
import { GqlModuleOptions, GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { Enviroment } from './common/env.config';
import { CommonModule } from './common/common.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { ProviderModule } from './provider/provider.module';
import { SaleModule } from './sale/sale.module';
import { SaleItemModule } from './sale-item/sale-item.module';
import { ProductAggregateModule } from './product-aggregate/module';
import { SaleAggregateModule } from './sale-aggregate/module';
import { ProviderOrderModule } from './provider-order/module';
import { ProviderOrderItemModule } from './provider-order-item/module';
import { FinancialMovementModule } from './financial-movement/module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [Enviroment]
    }),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useFactory: (config: ConfigType<typeof Enviroment>) => {
        const endpoint = join(config.basePath || '', 'graphql');
        const schemaModuleOptions: Partial<GqlModuleOptions> = {
          autoSchemaFile: true,
          sortSchema: true
        };
        return {
          path: endpoint,
          playground: {
            endpoint: join(config.basePath || '', endpoint)
          },
          introspection: true,
          ...schemaModuleOptions
        };
      },
      inject: [Enviroment.KEY]
    }),
    CommonModule,
    UserModule,
    ProductModule,
    ProviderModule,
    ProviderOrderModule,
    ProviderOrderItemModule,
    SaleModule,
    SaleItemModule,
    ProductAggregateModule,
    SaleAggregateModule,
    FinancialMovementModule
  ]
})
export class AppModule {}
