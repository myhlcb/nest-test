import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
@Injectable()
export class DogService {
  constructor(@InjectConnection() private connection: Connection) {}
  async getAllDog(): Promise<any[]> {
    const result = await this.connection.db.collection('dogs').find().toArray();
    return result;
  }
  async createDog(payload: {
    name: string;
    age: number;
    breed: string;
  }): Promise<string> {
    await this.connection.db.collection('dogs').insertOne(payload);
    return 'success';
  }
}
