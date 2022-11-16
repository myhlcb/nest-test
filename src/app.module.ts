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
@Module({
  imports: [],
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
