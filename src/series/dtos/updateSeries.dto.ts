import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsNumber,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class UpdateSeriesDto {
  @IsString()
  @MinLength(2)
  @ApiProperty({
    type: String,
    maximum: 2,
    description: 'title of the series',
    example: 'Naruto',
  })
  title;
  @IsString()
  @MinLength(2)
  @ApiProperty({
    type: String,
    minimum: 2,
    description: 'brief description of the series',
    example: 'Naruto is a manga series',
  })
  synopsis;
  @IsDate()
  @ApiProperty({
    type: Date,
    description: 'date of first publication',
    example: '2002-09-21',
  })
  publicationDate;
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    type: Number,
    description: 'total chapters of the series',
    example: 12,
  })
  totalChapters;
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    type: Number,
    description: 'total seasons of the series',
    example: 1,
  })
  totalSeasons;
}
