import {
  IsISO8601,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateSeriesDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  title;
  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  synopsis;
  @IsISO8601()
  publicationDate;
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  totalChapters;
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  totalSeasons;
}
