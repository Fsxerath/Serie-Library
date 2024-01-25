import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UsersService } from 'src/users/services/users.service';

@Module({
  imports: [UsersService],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
