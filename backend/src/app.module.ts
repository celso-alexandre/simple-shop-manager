import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { join } from 'path';
import { GqlModuleOptions, GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { Enviroment } from '@Src/common/env.config';
import { CommonModule } from './common/common.module';
import { UserModule } from './user/user.module';
import { InvestmentGoalModule } from './investment-goal/investment-goal.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [Enviroment],
    }),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useFactory: (config: ConfigType<typeof Enviroment>) => {
        const endpoint = join(config.basePath || '', 'graphql');
        const schemaModuleOptions: Partial<GqlModuleOptions> = {
          autoSchemaFile: true,
          sortSchema: true,
        };
        return {
          path: endpoint,
          playground: {
            endpoint: join(config.basePath || '', endpoint),
          },
          introspection: true,
          ...schemaModuleOptions,
        };
      },
      inject: [Enviroment.KEY],
    }),
    CommonModule,
    UserModule,
    InvestmentGoalModule,
  ],
})
export class AppModule {}
