import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Series } from 'src/series/entities/series.entity';

@Entity('typeserie')
export class Typeserie {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ length: 100 })
  type: string;
  @Column({ length: 250 })
  description: string;
  @OneToMany(() => Series, (series) => series.type)
  series: Series[];
}
