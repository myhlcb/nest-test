import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DogsController } from './dogs.controller';
import { DogService } from './dogs.service';
import { DogSchema } from '../schemas/dogs.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'dogs', schema: DogSchema }])],
  controllers: [DogsController],
  providers: [DogService],
})
export class DogsModule {}
