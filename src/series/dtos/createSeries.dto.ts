import {
  IsISO8601,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateSeriesDto {
  @IsString()
  @IsNotEmpty()
  title;
  @IsString()
  synopsis;
  @IsISO8601()
  publicationDate;
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  totalChapters;
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  totalSeasons;
}
