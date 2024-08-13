import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateTypeSerieDto {
  @IsOptional()
  @IsString()
  @MinLength(3)
  @ApiProperty({
    type: String,
    minLength: 3,
    description: 'type of series (manga, anime, tv show, etc)',
    example: 'manga',
  })
  type: string;
  @IsOptional()
  @IsString()
  @MinLength(5)
  @ApiProperty({
    type: String,
    minLength: 5,
    description: 'brief description of the type of series',
    example: 'medium used to express ideas with images',
  })
  description: string;
}
