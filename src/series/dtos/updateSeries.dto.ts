import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class UpdateSeriesDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  title;
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  synopsis;
  @IsDate()
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
