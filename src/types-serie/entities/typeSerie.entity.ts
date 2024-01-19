import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Series } from 'src/series/entities/series.entity';
export class Typeserie {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100 })
  type: string;
  @OneToMany(() => Series, (series) => series.type)
  series: Series[];
}
