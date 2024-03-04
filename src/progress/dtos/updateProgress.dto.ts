import {
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class UpdateProgressDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  chapter;
  @IsOptional()
  @IsNumber()
  @IsPositive()
  season;
  @IsOptional()
  @IsString()
  @MinLength(10)
  resume;
}
