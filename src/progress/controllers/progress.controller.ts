import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ProgressService } from '../services/progress.service';
import { CreateProgressDto } from '../dtos/createProgress.dto';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User } from 'src/users/entities/user.entity';
import { UpdateProgressDto } from '../dtos/updateProgress.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PaginationParams } from 'src/shared/decorators/pagination-params.decorator';
import { Pagination } from 'src/shared/interfaces/pagination.interface';

@Controller('progress')
@UseGuards(AuthGuard())
@ApiTags('progress')
@ApiBearerAuth()
export class ProgressController {
  constructor(private readonly progress_Services: ProgressService) {}
  @Get()
  getAllProgress(@GetUser() user: User) {
    return this.progress_Services.getAllProgressByUser(user);
  }
  @Get('series/:id_series')
  getProgressBySeries(
    @Param('id_series') seriesID: string,
    @GetUser() user: User,
    @PaginationParams() pagination: Pagination,
  ) {
    return this.progress_Services.getProgressBySeries(
      seriesID,
      user,
      pagination,
    );
  }
  @Get('/:id')
  getOneProgress(@Param('id') id: string, @GetUser() user: User) {
    return this.progress_Services.findOneProgress(id, user);
  }
  @Post()
  createProgress(
    @Body() createProgressDto: CreateProgressDto,
    @GetUser() user: User,
  ) {
    return this.progress_Services.createProgress(createProgressDto, user);
  }
  @Patch('/:id')
  updateProgress(
    @Param('id') id: string,
    @Body() progress: UpdateProgressDto,
    @GetUser() user: User,
  ) {
    return this.progress_Services.updateProgress(id, progress, user);
  }
  @Delete('/:id')
  deleteProgress(@Param('id') id: string, @GetUser() user: User) {
    return this.progress_Services.deleteProgress(id, user);
  }
  @Delete('/all/:id')
  deleteAllProgress(@GetUser() user: User, @Param('id') id: string) {
    return this.progress_Services.deleteAllProgress(user, id);
  }
}
