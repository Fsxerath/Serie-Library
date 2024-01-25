import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/createUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  createUser(createdUser: CreateUserDto): Promise<User> {
    return this.userRepository.save(createdUser);
  }
  findOneByEmail(email: string): Promise<User> {
    return this.userRepository.findOneBy({ email });
  }
}
