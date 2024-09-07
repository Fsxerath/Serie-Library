import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
  MinLength,
} from 'class-validator';
import { url } from 'inspector';

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
  @IsString()
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
  @IsUrl()
  @ApiProperty({
    type: url,
    description: 'url of series image',
    example: 'https://example.com/image.jpg',
  })
  thumbnail;
}
