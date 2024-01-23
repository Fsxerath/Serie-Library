import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdateTypeSerieDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  type: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  description: string;
}
