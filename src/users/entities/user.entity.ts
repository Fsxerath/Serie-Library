import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100, unique: true })
  email: string;
  @Column({ length: 50 })
  username: string;
  @Column({ length: 256 })
  password: string;
}
