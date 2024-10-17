import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Series } from '../entities/series.entity';
import { Repository } from 'typeorm';
import { CreateSeriesDto } from '../dtos/createSeries.dto';
import { UpdateSeriesDto } from '../dtos/updateSeries.dto';
import { TypeSerieService } from 'src/types-serie/services/type-serie.service';
import { PaginationResource } from 'src/shared/types/pagination-resource.type';
import { Pagination } from 'src/shared/interfaces/pagination.interface';

@Injectable()
export class SeriesService {
  constructor(
    @InjectRepository(Series)
    private readonly seriesRepository: Repository<Series>,
    private readonly typeService: TypeSerieService,
  ) {}

  async getSeriesForUser(
    userID: string,
    { page, size, limit, offset }: Pagination,
  ): Promise<PaginationResource<Series>> {
    const [series, total] = await this.seriesRepository.findAndCount({
      select: ['id', 'title', 'thumbnail'],
      where: {
        progress: { user: { id: userID } },
      },
      order: { title: 'ASC' },
      take: size,
      skip: offset,
    });
    return {
      totalItems: total,
      items: series,
      page,
      limit,
    };
  }
  async getAllSeries(
    userID: string,
    { page, size, limit, offset }: Pagination,
  ): Promise<PaginationResource<Series>> {
    const [seriesWithOutUser, total] = await this.seriesRepository
      .createQueryBuilder('series')
      .leftJoinAndSelect(
        'series.progress',
        'progress',
        'progress.user = :userID',
        { userID },
      )
      .where('progress.id IS NULL')
      .select(['series.id', 'series.title', 'series.thumbnail'])
      .orderBy({ 'series.title': 'ASC' })
      .take(size)
      .skip(offset)
      .getManyAndCount();
    return {
      totalItems: total,
      items: seriesWithOutUser,
      page,
      limit,
    };
  }
  async findOneByID(id: string): Promise<Series> {
    const series = await this.seriesRepository
      .createQueryBuilder('series')
      .leftJoinAndSelect('series.progress', 'progress')
      .select([
        'series.id',
        'series.title',
        'series.synopsis',
        'series.publicationDate',
        'series.totalChapters',
        'series.thumbnail',
        'progress.chapter',
      ])
      .where('series.id = :id', { id })
      .orderBy('progress.chapter', 'DESC')
      .limit(1)
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
