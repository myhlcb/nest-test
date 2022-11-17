import { Get, Post, Controller, Body } from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('entity')
export class UsersController {
  constructor(private readonly uservices: UsersService) {}
  @Get('users')
  findAll() {
    return this.uservices.findAll();
  }
  @Post('user')
  create(@Body('payload') payload: { firstName: string; lastName: string }) {
    return this.uservices.create(payload);
  }
}
