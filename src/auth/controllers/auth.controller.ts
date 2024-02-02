import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { RegisterDto } from '../dtos/register.dto';
import { LoginDto } from '../dtos/login.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
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
  @Get('example')
  @UseGuards(AuthGuard())
  privateRoute() {
    return {
      ok: true,
      message: 'this is a private route',
    };
  }
}
