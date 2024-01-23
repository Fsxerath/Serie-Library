import { Injectable } from '@nestjs/common';
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
}
