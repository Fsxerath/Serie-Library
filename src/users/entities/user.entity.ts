import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Progress } from 'src/progress/entities/progress.entity';
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100, unique: true })
  email: string;
  @Column({ length: 50 })
  username: string;
  @Column({ length: 256 })
  password: string;
  @OneToMany(() => Progress, (progress) => progress.user)
  progress: Progress[];
}
