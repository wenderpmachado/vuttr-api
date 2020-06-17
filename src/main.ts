import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

function bootstrapOpenAPI(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('VUTTR API')
    .setDescription('Very Useful Tools to Remember')
    .setVersion('1.0')
    .addTag('tools')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  bootstrapOpenAPI(app);
  await app.listen(3000);
}
bootstrap();
