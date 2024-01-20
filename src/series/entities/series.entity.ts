import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Progress } from 'src/progress/entities/progress.entity';
import { Typeserie } from 'src/types-serie/entities/typeSerie.entity';

@Entity('series')
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
  @OneToOne(() => Progress)
  @JoinColumn()
  progress: Progress;
  @ManyToOne(() => Typeserie, (typeserie) => typeserie.series)
  type: Typeserie;
}
