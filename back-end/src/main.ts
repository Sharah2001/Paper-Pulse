import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`Application running on: http://localhost:${port}`);
}
bootstrap().catch((err) => {
  console.error('Error starting application:', err);
});
