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
      select: ['id', 'chapter', 'resume', 'dateCreated'],
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

  getProgressAllByUser(user: User): Promise<Progress[]> {
    return this.progressRepository.find({
      select: ['id', 'chapter', 'resume', 'dateCreated'],
      where: {
        user: {
          id: user.id,
        },
      },
    });
  }

  async getProgressByUser(seriesID: string, user: User): Promise<Progress[]> {
    return await this.progressRepository.find({
      select: ['id', 'chapter', 'resume', 'dateCreated'],
      where: {
        user: {
          id: user.id,
        },
        series: {
          id: seriesID,
        },
      },
    });
  }

  async validateChapterProgress(
    chapter: number,
    user: string,
    series: string,
  ): Promise<Progress> {
    const progressFind = await this.progressRepository.findOne({
      where: {
        chapter: chapter,
        user: {
          id: user,
        },
        series: {
          id: series,
        },
      },
    });
    return progressFind;
  }

  async createProgress(createProgressDto: CreateProgressDto, user: User) {
    const series = await this.seriesService.findOneByID(
      createProgressDto.series,
    );
    const isRepeated = await this.validateChapterProgress(
      createProgressDto.chapter,
      user.id,
      series.id,
    );
    if (isRepeated) throw new BadRequestException('Chapter already exists');
    console.log('Chapter already exists');
    const created_Progress = await this.progressRepository.save({
      ...createProgressDto,
      user,
      series,
    });
    return {
      id: created_Progress.id,
      chapter: created_Progress.chapter,
      resume: created_Progress.resume,
      dateCreated: created_Progress.dateCreated,
    };
  }
  async updateProgress(
    id: string,
    updateProgress: UpdateProgressDto,
    user: User,
  ): Promise<string> {
    const searchProgress = await this.findOneProgress(id, user);
    const updatedProgress = Object.assign(searchProgress, updateProgress);
    const saveProgress = await this.progressRepository.save(updatedProgress);
    if (!saveProgress) throw new Error('Error updating progress');
    return `Progress is updated successfully`;
  }
  async deleteProgress(id: string, user: User): Promise<string> {
    const progress = await this.findOneProgress(id, user);
    const deleteProgress = await this.progressRepository.remove(progress);
    if (!deleteProgress) throw new Error('Error deleting progress');
    return `Progress is deleted successfully`;
  }
}
