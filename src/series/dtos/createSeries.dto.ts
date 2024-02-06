import {
  IsDate,
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
  @IsDate()
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
