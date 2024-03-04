import { IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateTypeSerieDto {
  @IsOptional()
  @IsString()
  @MinLength(3)
  type: string;
  @IsOptional()
  @IsString()
  @MinLength(5)
  description: string;
}
