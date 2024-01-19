import {
  Column,
  CreateDateColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';

export class Progress {
  @PrimaryGeneratedColumn()
  id: number;
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
  @ManyToOne(() => User, (user) => user.progress)
  user: User;
}
