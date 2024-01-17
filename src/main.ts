import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  //TODO: FIX THE UNDEFINED NODE_ENV
  console.log(process.env.NODE_ENV);
}
bootstrap();
