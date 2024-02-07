import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class UpdateProgressDto {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  chapter;
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  season;
  @IsString()
  @MinLength(10)
  @IsNotEmpty()
  resume;
}
