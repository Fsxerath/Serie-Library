import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateTypeSerieDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  type: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  description: string;
}
