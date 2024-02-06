import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Series } from '../entities/series.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeriesService {
  constructor(
    @InjectRepository(Series)
    private readonly seriesRepository: Repository<Series>,
  ) {}
  async getAllSeries(): Promise<Series[]> {
    return await this.seriesRepository.find();
  }
  async createSeries(series: Series): Promise<Series> {
    return await this.seriesRepository.save(series);
  }
}
