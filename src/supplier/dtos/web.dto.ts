import { IsString, IsUrl } from 'class-validator';

export class WebDto {
  @IsUrl()
  url: string; //netflix.com
  @IsString()
  name: string; //netflix
}
