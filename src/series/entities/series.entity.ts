import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Typeserie } from 'src/types-serie/entities/typeSerie.entity';
import { Progress } from 'src/progress/entities/progress.entity';

@Entity('series')
export class Series {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ length: 256 })
  title: string;
  @Column({ type: 'text' })
  synopsis: string;
  @Column({ length: 12 })
  publicationDate: string;
  @Column({ type: 'int' })
  totalChapters: number;
  @Column({ type: 'text' })
  thumbnail: string;
  @ManyToOne(() => Progress, (progress) => progress.series)
  progress: Progress[];
  @ManyToOne(() => Typeserie, (typeserie) => typeserie.series)
  type: Typeserie;
}
