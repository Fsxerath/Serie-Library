import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProgressDto } from '../dtos/createProgress.dto';
import { User } from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Progress } from '../entities/progress.entity';
import { Repository } from 'typeorm';
import { SeriesService } from 'src/series/services/series.service';

@Injectable()
export class ProgressService {
  constructor(
    @InjectRepository(Progress)
    private readonly progressRepository: Repository<Progress>,
    private readonly seriesService: SeriesService,
  ) {}

  async findOneProgress(id: string, user: User): Promise<Progress> {
    const progressFind = await this.progressRepository.findOne({
      where: {
        id,
        user: {
          id: user.id,
        },
      },
    });
    if (!progressFind) throw new NotFoundException('progress not found');
    return progressFind;
  }
  async getProgressByUser(user: User): Promise<Progress[]> {
    return await this.progressRepository.find({
      where: {
        user: {
          id: user.id,
        },
      },
    });
  }
  //TODO: FIX THIS METHOD
  async validateSeriesProgress(
    user: User,
    progress: CreateProgressDto,
  ): Promise<Progress> {
    const find_series = this.progressRepository.findOne({
      where: {
        user: { id: user.id },
        series: { id: progress.series },
      },
    });
    if (!find_series) return null;
    return find_series;
  }
  async createProgress(
    createProgressDto: CreateProgressDto,
    user: User,
  ): Promise<Progress> {
    const series = await this.seriesService.findOneByID(
      createProgressDto.series,
    );
    if (!series) throw new NotFoundException('Series not found');
    const validateSeriesOfProgress = this.validateSeriesProgress(
      user,
      createProgressDto,
    );
    console.log(validateSeriesOfProgress);
    if (validateSeriesOfProgress)
      throw new BadRequestException(
        'You already have a progress in this series',
      );
    return await this.progressRepository.save({
      ...createProgressDto,
      user,
      series,
    });
  }
  async updateProgress(
    id: string,
    progress: Partial<Progress>,
    user: User,
  ): Promise<Progress> {
    const searchProgress = await this.findOneProgress(id, user);
    const updatedProgress = Object.assign(searchProgress, progress);
    const saveProgress = await this.progressRepository.save(updatedProgress);
    if (!saveProgress) throw new Error('Error updating progress');
    return saveProgress;
  }
  async deleteProgress(id: string, user: User): Promise<Progress> {
    const progress = await this.findOneProgress(id, user);
    const deleteProgress = await this.progressRepository.remove(progress);
    if (!deleteProgress) throw new Error('Error deleting progress');
    return deleteProgress;
  }
}
