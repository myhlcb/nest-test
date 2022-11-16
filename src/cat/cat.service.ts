import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from '../schemas/cat.schema';

@Injectable()
export class CatService {
  constructor(@InjectModel('Cat') private catModel: Model<CatDocument>) {}
  async create(payload: {
    name: string;
    age: number;
    breed: string;
  }): Promise<Cat> {
    const createCat = this.catModel.create(payload);
    return createCat;
  }
  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }
}
