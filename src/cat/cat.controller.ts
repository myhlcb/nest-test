import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatService } from './cat.service';
import { Cat } from '../schemas/cat.schema';
@Controller('schema')
export class CatController {
  constructor(private readonly catService: CatService) {}
  @Get('cats')
  findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }
  @Post('cat')
  create(
    @Body('payload') payload: { name: string; age: number; breed: string },
  ): Promise<Cat> {
    return this.catService.create(payload);
  }
}
