import { IsEnum, IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { Webs } from '../enums/web.enum';

export class RequestSupplierDto {
  @IsUrl()
  @IsNotEmpty()
  url: string;
  @IsString()
  @IsEnum(Webs, {
    message: `The website is invalid: [${Object.values(Webs)}]`,
  })
  @IsNotEmpty()
  name: string;
}
