import { NestFactory } from '@nestjs/core';
//? Agrega la posibilidad de usar class validators
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //? Agrega la posibilidad de usar class validators
  //? al pasar un objeto agregas la posibilidad de aumentar la seguridad al hacer validaciones
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
