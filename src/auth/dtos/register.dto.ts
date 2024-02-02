import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { BeforeInsert, BeforeUpdate } from 'typeorm';

export class RegisterDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  username: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @Transform(({ value }) => value.trim())
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
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
