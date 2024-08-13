import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { RegisterDto } from '../dtos/register.dto';
import { LoginDto } from '../dtos/login.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  login(@Body() userLogin: LoginDto) {
    return this.authService.login(userLogin);
  }
  @Post('register')
  register(@Body() register: RegisterDto) {
    return this.authService.register(register);
  }
}
