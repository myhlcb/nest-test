import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('common')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('cats')
  getAllCat(): string {
    return this.appService.getAllCat();
  }
}
