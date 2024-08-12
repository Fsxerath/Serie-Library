import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateTypeSerieDto {
  @IsOptional()
  @IsString()
  @MinLength(3)
  @ApiProperty({
    example: 'manga',
    type: String,
    minLength: 3,
  })
  type: string;
  @IsOptional()
  @IsString()
  @MinLength(5)
  @ApiProperty({
    example: 'medium used to express ideas with images',
    type: String,
    minLength: 5,
  })
  description: string;
}
