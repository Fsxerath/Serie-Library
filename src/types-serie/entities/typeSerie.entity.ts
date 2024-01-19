import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Typeserie {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100 })
  type: string;
}
