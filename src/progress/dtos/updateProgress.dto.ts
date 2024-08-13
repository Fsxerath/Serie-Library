import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class UpdateProgressDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    type: Number,
    description: 'Your current chapter in the series',
    example: 1,
  })
  chapter;
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    type: Number,
    required: true,
    description: 'Your current season in the series',
    example: 1,
  })
  season;
  @IsOptional()
  @IsString()
  @MinLength(10)
  @ApiProperty({
    type: String,
    required: true,
    minimum: 10,
    description: 'Your current progress summary in the series',
    example: 'This series is about...',
  })
  resume;
}
