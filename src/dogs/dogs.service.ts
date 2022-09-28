import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  getAllDog(): string {
    return 'this action return all dogs';
  }
}
