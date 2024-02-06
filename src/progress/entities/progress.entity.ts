import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Series } from 'src/series/entities/series.entity';

@Entity('progress')
export class Progress {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'int' })
  chapter: number;
  @Column({ type: 'int' })
  season: number;
  @Column({ type: 'text' })
  resume: string;
  @CreateDateColumn()
  dateCreated: Date;
  @UpdateDateColumn()
  dateUpdate: Date;
  @OneToOne(() => Series)
  @JoinColumn()
  series_progress: Series;
  @ManyToOne(() => User, (user) => user.progress)
  user: User;
}
