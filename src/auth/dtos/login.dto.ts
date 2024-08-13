import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Email of the user',
    required: true,
    example: 'user@example.com',
  })
  email: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Password of the user',
    required: true,
    example: 'password',
  })
  password: string;
}
