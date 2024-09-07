import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
  MinLength,
} from 'class-validator';

export class UpdateSeriesDto {
  @IsOptional()
  @IsString()
  @MinLength(2)
  @ApiProperty({
    type: String,
    maximum: 2,
    description: 'title of the series',
    example: 'Naruto',
  })
  title;
  @IsOptional()
  @IsString()
  @MinLength(2)
  @ApiProperty({
    type: String,
    minimum: 2,
    description: 'brief description of the series',
    example: 'Naruto is a manga series',
  })
  synopsis;
  @IsOptional()
  @IsString()
  @ApiProperty({
    type: Date,
    description: 'date of first publication',
    example: '2002-09-21',
  })
  publicationDate;
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    type: Number,
    description: 'total chapters of the series',
    example: 12,
  })
  totalChapters;
  @IsUrl()
  @IsOptional()
  @ApiProperty({
    type: URL,
    description: 'url of series image',
    example: 'https://example.com/image.jpg',
  })
  thumbnail;
  @IsOptional()
  @IsNumber()
  @IsPositive()
  typeSeries: number;
}
