import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { triggerAsyncId } from 'async_hooks';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    transformOptions: {
      enableImplicitConversion: true
    }
  }))
  const PORT = process.env.PORT || 3001;
  await app.listen(PORT);
}
bootstrap();
