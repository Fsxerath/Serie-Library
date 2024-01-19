import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Series {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 256 })
  title: string;
  @Column({ type: 'text' })
  synopsis: string;
  @Column({ type: 'date' })
  publicationDate: string;
  @Column({ type: 'int' })
  totalChapters: number;
  @Column({ type: 'int' })
  totalSeasons: number;
}
