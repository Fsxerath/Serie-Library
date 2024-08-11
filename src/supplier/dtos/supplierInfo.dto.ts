import { IsString } from 'class-validator';

export class SupplierInfoDto {
  @IsString()
  title: string;
  @IsString()
  date: string;
  @IsString()
  synopsis: string;
  @IsString()
  chapters: string;
}
