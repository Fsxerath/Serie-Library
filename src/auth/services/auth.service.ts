import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly UserServices: UsersService) {}
  login() {
    return 'Login';
  }
  register() {
    return 'Registro';
  }
}
