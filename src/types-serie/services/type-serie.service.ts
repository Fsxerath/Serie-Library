import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Typeserie } from '../entities/typeSerie.entity';
import { Repository } from 'typeorm';
import { CreateTypeSerieDto } from '../dtos/createTypeSerie.dto';

@Injectable()
export class TypeSerieService {
  constructor(
    @InjectRepository(Typeserie)
    private readonly typeSerieRepository: Repository<Typeserie>,
  ) {}

  async getAllTypeSeries(): Promise<Typeserie[]> {
    return await this.typeSerieRepository.find();
  }

  async createTypeSerie(series: CreateTypeSerieDto): Promise<Typeserie> {
    return await this.typeSerieRepository.save(series);
  }
  async getOneTypeSerie(id: number): Promise<Typeserie> {
    const type = await this.typeSerieRepository.findOne({
      where: { id },
    });
    if (!type) throw new NotFoundException('Type series not found');
    return type;
  }
  async updateTypeSerie(id: number, updateTypeSerie: CreateTypeSerieDto) {
    const series = await this.getOneTypeSerie(id);
    const updatedSeries = Object.assign(series, updateTypeSerie);
    const saveTypeSeries = await this.typeSerieRepository.save(updatedSeries);
    if (!saveTypeSeries) {
      throw new Error('Error updating type series');
    }
    return saveTypeSeries;
  }
}
