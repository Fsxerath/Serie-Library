import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class UpdateProgressDto {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  chapter;
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  season;
  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  resume;
}
