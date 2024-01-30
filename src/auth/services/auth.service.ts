import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';
import { RegisterDto } from '../dtos/register.dto';
import { compare, hash } from 'bcrypt';
import { LoginDto } from '../dtos/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly UserServices: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async login(userLogin: LoginDto) {
    const user = await this.UserServices.findOneByEmail(userLogin.email);
    if (!user) {
      throw new UnauthorizedException('email not found');
    }
    const isPasswordMatch = await compare(userLogin.password, user.password);
    if (!isPasswordMatch) {
      throw new UnauthorizedException('wrong password');
    }
    const payload = { email: user.email, sub: user.id };
    const token = await this.jwtService.signAsync(payload);
    return {
      access_token: token,
      email: user.email,
    };
  }

  async register(userRegister: RegisterDto): Promise<RegisterDto> {
    const emailExists = await this.UserServices.findOneByEmail(
      userRegister.email,
    );
    if (emailExists) {
      throw new UnauthorizedException('email already used');
    }
    const nameExists = await this.UserServices.findOneByUsername(
      userRegister.username,
    );
    if (nameExists) {
      throw new UnauthorizedException('username already used');
    }
    userRegister.password = await hash(userRegister.password, 10);
    return await this.UserServices.createUser(userRegister);
  }
}
