import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
@Injectable()
export class UsersService {
  // @InjectRepository()装饰器将 UsersRepository 注入到 UsersService 中
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne({ where: { id } });
  }
  async create(payload: any): Promise<User> {
    const user: any = await this.usersRepository.create(payload);
    return this.usersRepository.save(user);
  }
}
