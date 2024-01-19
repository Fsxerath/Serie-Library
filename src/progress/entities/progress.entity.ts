import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class Progress {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  chapter: string;
  @Column()
  season: string;
  @Column()
  resume: string;
  @CreateDateColumn()
  dateCreated: string;
  @UpdateDateColumn()
  dateUpdate: string;
  user_id: number;
}
