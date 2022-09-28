import { Controller, Get } from '@nestjs/common';
import { DogService } from './dogs.service';
@Controller('common')
export class DogsController {
  constructor(private readonly dogService: DogService) {}
  @Get('dogs')
  getAllCat(): string {
    return this.dogService.getAllDog();
  }
}
