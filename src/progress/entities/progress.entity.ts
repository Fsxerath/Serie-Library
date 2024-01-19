import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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
  dateCreated: string;
  @UpdateDateColumn()
  dateUpdate: string;
  user_id: number;
}
