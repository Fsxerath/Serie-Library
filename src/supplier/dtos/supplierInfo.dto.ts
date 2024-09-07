import { IsString } from 'class-validator';

export class SupplierInfoDto {
  @IsString()
  bookType: string;
  @IsString()
  thumbnail: string;
  @IsString()
  title: string;
  @IsString()
  date: string;
  @IsString()
  synopsis: string;
  @IsString()
  chapters: string;
}
