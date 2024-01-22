import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProgressDto {
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
