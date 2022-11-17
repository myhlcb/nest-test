import { Body, Controller, Get, Post } from '@nestjs/common';
import { DogService } from './dogs.service';
@Controller('schema')
export class DogsController {
  constructor(private readonly dogService: DogService) {}
  @Get('dogs')
  getAllDog(): any {
    return this.dogService.getAllDog();
  }
  @Post('dog')
  createDog(
    @Body('payload') payload: { name: string; age: number; breed: string },
  ): any {
    return this.dogService.createDog(payload);
  }
}
