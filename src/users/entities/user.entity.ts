import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Progress } from 'src/progress/entities/progress.entity';
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100, unique: true })
  email: string;
  @Column({ length: 50, unique: true })
  username: string;
  @Column({ length: 256 })
  password: string;
  @OneToMany(() => Progress, (progress) => progress.user)
  progress: Progress[];
}
