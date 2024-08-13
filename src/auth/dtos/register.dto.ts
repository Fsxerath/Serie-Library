import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { BeforeInsert, BeforeUpdate } from 'typeorm';

export class RegisterDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @ApiProperty({
    type: String,
    minLength: 4,
    required: true,
    description: 'Username of the user',
    example: 'user235',
  })
  username: string;
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: 'Email of the user',
    example: 'user@example.com',
  })
  email: string;
  @Transform(({ value }) => value.trim())
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty({
    type: String,
    minLength: 8,
    required: true,
    description: 'Password of the user',
    example: 'password',
  })
  password: string;
  @BeforeInsert()
  checkFieldsBeforeInsert() {
    this.email = this.email.toLowerCase().trim();
  }
  @BeforeUpdate()
  checkFieldsBeforeUpdate() {
    this.checkFieldsBeforeInsert();
  }
}
