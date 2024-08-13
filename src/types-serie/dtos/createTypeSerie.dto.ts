import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateTypeSerieDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @ApiProperty({
    type: String,
    minLength: 3,
    required: true,
    description: 'type of series (manga, anime, tv show, etc)',
    example: 'manga',
  })
  type: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @ApiProperty({
    type: String,
    minLength: 5,
    required: true,
    description: 'brief description of the type of series',
    example: 'japanese comic',
  })
  description: string;
}
