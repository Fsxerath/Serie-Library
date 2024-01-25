import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Progress } from 'src/progress/entities/progress.entity';
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100, unique: true })
  email: string;
  @Column({ length: 50 })
  username: string;
  @Column({ length: 50 })
  password: string;
  @OneToMany(() => Progress, (progress) => progress.user)
  progress: Progress[];
}
