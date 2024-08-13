import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    type: String,
    maximum: 2,
    description: 'title of the series',
    example: 'Naruto',
  })
  title;
  @IsNotEmpty()
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
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    type: Number,
    description: 'total chapters of the series',
    example: 12,
  })
  totalChapters;
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    type: Number,
    description: 'total seasons of the series',
    example: 1,
  })
  totalSeasons;
}
