import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterDto } from 'src/auth/dtos/register.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  createUser(createdUser: RegisterDto): Promise<User> {
    return this.userRepository.save(createdUser);
  }
  findOneByEmail(email: string): Promise<User> {
    return this.userRepository.findOneBy({ email });
  }
  findOneByUsername(username: string): Promise<User> {
    return this.userRepository.findOneBy({ username });
  }
}
