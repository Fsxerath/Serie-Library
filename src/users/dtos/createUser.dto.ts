import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  username;
  @IsEmail()
  @IsNotEmpty()
  email;
  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  password;
}
