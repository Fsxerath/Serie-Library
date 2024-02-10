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
  @Column({ type: 'date' })
  publicationDate: string;
  @Column({ type: 'int' })
  totalChapters: number;
  @Column({ type: 'int' })
  totalSeasons: number;
  @ManyToOne(() => Progress, (progress) => progress.series_progress)
  progress: Progress[];
  @ManyToOne(() => Typeserie, (typeserie) => typeserie.series)
  type: Typeserie;
}
