import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Series } from 'src/series/entities/series.entity';

@Entity('typeserie')
export class Typeserie {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100 })
  type: string;
  @Column({ length: 250 })
  description: string;
  @OneToMany(() => Series, (series) => series.typeSeries)
  series: Series[];
}
