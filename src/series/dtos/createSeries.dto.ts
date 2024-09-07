import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
  MinLength,
} from 'class-validator';

export class CreateSeriesDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @ApiProperty({
    type: String,
    required: true,
    description: 'title of the series',
    example: 'Naruto',
  })
  title;
  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  @ApiProperty({
    type: String,
    required: true,
    description: 'brief description of the series',
    example: 'Naruto is a manga series',
  })
  synopsis;
  @IsString()
  @ApiProperty({
    type: String,
    description: 'date of first publication',
    example: '2002-09-21',
  })
  publicationDate;
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    type: Number,
    required: true,
    description: 'total chapters of the series',
    example: 12,
  })
  totalChapters;
  @IsNotEmpty()
  @IsUrl()
  @ApiProperty({
    type: URL,
    required: true,
    description: 'url of series image',
    example: 'https://example.com/image.jpg',
  })
  thumbnail;
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  typeSeries: number;
}
