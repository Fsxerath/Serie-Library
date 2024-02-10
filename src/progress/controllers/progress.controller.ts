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

@Controller('progress')
@UseGuards(AuthGuard())
export class ProgressController {
  constructor(private readonly progress_Services: ProgressService) {}
  @Get()
  getProgressByUser(@GetUser() user: User) {
    return this.progress_Services.getProgressByUser(user);
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
    @Body() progress: Partial<UpdateProgressDto>,
    @GetUser() user: User,
  ) {
    return this.progress_Services.updateProgress(id, progress, user);
  }
  @Delete('/:id')
  deleteProgress(@Param('id') id: string, @GetUser() user: User) {
    return this.progress_Services.deleteProgress(id, user);
  }
}
