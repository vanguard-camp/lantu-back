import { Inject, Injectable } from '@nestjs/common';
import { MongoRepository } from 'typeorm';
import { User } from './user.mongo.entity';
import { AddUserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: MongoRepository<User>,
  ) {}

  createOrSave(user: AddUserDto) {
    try {
      return this.userRepository.save(user);
    } catch (error) {
      console.log(error);

      return { error: 'error' };
    }
  }
}
