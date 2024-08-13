import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProgressDto {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    type: Number,
    required: true,
    description: 'Your current chapter in the series',
    example: 1,
  })
  chapter;
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    type: Number,
    required: true,
    description: 'Your current season in the series',
    example: 1,
  })
  season;
  @IsNotEmpty()
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
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    description: 'The series you are watching (this is a Primary key)',
    example: 'b52eef23-2a61-4874-9bd6-3b564037a2b3',
  })
  series;
}
