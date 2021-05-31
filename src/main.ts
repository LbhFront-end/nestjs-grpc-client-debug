import { NestFactory } from '@nestjs/core';
import { express as voyagerMiddleware } from 'graphql-voyager/middleware';
import { ValidationPipe } from '@/common/pipes/validation.pipe';
import { TransformInterceptor } from '@/common/interceptors/transform.interceptor';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use('/voyager', voyagerMiddleware({ endpointUrl: '/graphql' }));
  // app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalInterceptors(new TransformInterceptor())
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
