import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProgressDto } from '../dtos/createProgress.dto';
import { User } from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Progress } from '../entities/progress.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProgressService {
  constructor(
    @InjectRepository(Progress)
    private readonly progressRepository: Repository<Progress>,
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
  //TODO: Implement the verification if the user have more progress in the same series
  async createProgress(
    createProgressDto: CreateProgressDto,
    user: User,
  ): Promise<Progress> {
    return await this.progressRepository.save({
      ...createProgressDto,
      user,
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
