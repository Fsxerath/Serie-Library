import { PassportStrategy } from '@nestjs/passport';
import { User } from 'src/users/entities/user.entity';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { ConfigService } from '@nestjs/config';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from 'src/users/services/users.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly userRepository: UsersService,
    configServices: ConfigService,
  ) {
    super({
      secretOrKey: configServices.get('SECRET'),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }
  async validate(payload: JwtPayload): Promise<User> {
    const { email } = payload;

    const user = await this.userRepository.findOneByEmail(email);

    if (!user) throw new UnauthorizedException('token not valid');

    return user;
  }
}
