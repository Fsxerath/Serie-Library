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
import { Series } from 'src/series/entities/series.entity';
import { UpdateProgressDto } from '../dtos/updateProgress.dto';

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
  async validateSeriesProgress(user: User, series: Series): Promise<Progress> {
    const find_series = await this.progressRepository.findOneBy({
      user: { id: user.id },
      series: { id: series.id },
    });
    if (find_series)
      throw new BadRequestException(
        'Do you cant create progress for the same series',
      );
    return find_series;
  }
  async createProgress(
    createProgressDto: CreateProgressDto,
    user: User,
  ): Promise<Progress> {
    const series = await this.seriesService.findOneByID(
      createProgressDto.series,
    );
    await this.validateSeriesProgress(user, series);
    return await this.progressRepository.save({
      ...createProgressDto,
      user,
      series,
    });
  }
  async updateProgress(
    id: string,
    updateProgress: Partial<UpdateProgressDto>,
    user: User,
  ): Promise<Progress> {
    const searchProgress = await this.findOneProgress(id, user);
    const updatedProgress = Object.assign(searchProgress, updateProgress);
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
