import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Series } from '../entities/series.entity';
import { Repository } from 'typeorm';
import { CreateSeriesDto } from '../dtos/createSeries.dto';
import { UpdateSeriesDto } from '../dtos/updateSeries.dto';
import { TypeSerieService } from 'src/types-serie/services/type-serie.service';

@Injectable()
export class SeriesService {
  constructor(
    @InjectRepository(Series)
    private readonly seriesRepository: Repository<Series>,
    private readonly typeSerieService: TypeSerieService,
  ) {}
  async getAllSeries(): Promise<Series[]> {
    return await this.seriesRepository.find();
  }
  async findOneByID(id: string): Promise<Series> {
    return await this.seriesRepository.findOneOrFail({
      where: { id },
    });
  }
  async createSeries(series: CreateSeriesDto): Promise<Series> {
    return await this.seriesRepository.save(series);
  }
  async updateSeries(
    id: string,
    series: Partial<UpdateSeriesDto>,
  ): Promise<Series> {
    const searchSeries = await this.findOneByID(id);
    const updatedSeries = Object.assign(searchSeries, series);
    const saveSeries = await this.seriesRepository.save(updatedSeries);
    if (!saveSeries) throw new Error('Error updating series');
    return saveSeries;
  }
  async deleteSeries(id: string): Promise<Series> {
    const series = await this.findOneByID(id);
    const deleteSeries = await this.seriesRepository.remove(series);
    if (!deleteSeries) throw new Error('Error deleting series');
    return deleteSeries;
  }
}
