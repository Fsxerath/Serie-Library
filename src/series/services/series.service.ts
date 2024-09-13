import { Injectable, NotFoundException } from '@nestjs/common';
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
    private readonly typeService: TypeSerieService,
  ) {}

  async getSeriesForUser(userID: string): Promise<Series[]> {
    return await this.seriesRepository.find({
      select: ['id', 'title', 'thumbnail'],
      where: {
        progress: { user: { id: userID } },
      },
    });
  }
  async getAllSeries(): Promise<Series[]> {
    return await this.seriesRepository.find({
      select: ['id', 'title', 'thumbnail'],
    });
  }
  async findOneByID(id: string): Promise<Series> {
    const series = await this.seriesRepository
      .createQueryBuilder('series')
      .leftJoinAndSelect('series.typeSeries', 'typeSeries')
      .select([
        'series.id',
        'series.title',
        'series.synopsis',
        'series.publicationDate',
        'series.totalChapters',
        'series.thumbnail',
        'typeSeries.type',
      ])
      .where('series.id = :id', { id })
      .getOne();
    if (!series) throw new NotFoundException('Series not found');
    return series;
  }
  async createSeries(series: CreateSeriesDto): Promise<Series> {
    const type = await this.typeService.getOneTypeSerie(series.typeSeries);
    if (!type) throw new NotFoundException('Type not found');
    return await this.seriesRepository.save({
      ...series,
      typeSeries: type,
    });
  }
  async updateSeries(
    id: string,
    series: Partial<UpdateSeriesDto>,
  ): Promise<Series> {
    const searchSeries = await this.findOneByID(id);
    const type = await this.typeService.getOneTypeSerie(series.typeSeries);
    if (!type) throw new NotFoundException('Type not found');
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
