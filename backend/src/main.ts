import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaExceptionFilter } from './common/prisma-exception-filter.decorator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: { origin: '*' },
  });
  app.useGlobalFilters(new PrismaExceptionFilter('main', true));
  await app.listen(3000);
}
bootstrap();
