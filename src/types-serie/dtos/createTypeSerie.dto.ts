import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateTypeSerieDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @ApiProperty({
    example: 'manga',
    type: String,
    minLength: 3,
    required: true,
  })
  type: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @ApiProperty({
    example: 'japanese comic',
    type: String,
    minLength: 5,
    required: true,
  })
  description: string;
}
