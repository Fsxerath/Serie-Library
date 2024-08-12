import { IsEnum, IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { Webs } from '../enums/web.enum';
import { ApiProperty } from '@nestjs/swagger';

export class RequestSupplierDto {
  @IsUrl()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: 'url of the series on TMO',
    example:
      'https://visortmo.com/library/manga/475/naruto-digital-colored-comics',
  })
  url: string;
  @IsString()
  @IsEnum(Webs, {
    message: `The website is invalid: [${Object.values(Webs)}]`,
  })
  @IsNotEmpty()
  @ApiProperty({
    type: Webs,
    required: true,
    description: 'name of page where the series is located',
    example: Webs.TMO,
  })
  name: string;
}
