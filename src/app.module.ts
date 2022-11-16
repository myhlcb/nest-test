import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogService } from './dogs/dogs.service';
import { DogsController } from './dogs/dogs.controller';
import { LoggerMiddleware } from '../middleware/logger.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { CatModule } from './cat/cat.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://admin:123456@localhost:27018', {
      dbName: 'test',
    }),
    CatModule,
  ],
  controllers: [AppController, DogsController],
  providers: [AppService, DogService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        { path: 'cats', method: RequestMethod.GET },
        { path: 'cats', method: RequestMethod.POST },
        'cats/(.*)',
      )
      .forRoutes({ path: 'common*', method: RequestMethod.ALL });
  }
}
