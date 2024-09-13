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
import { SeriesService } from '../services/series.service';
import { CreateSeriesDto } from '../dtos/createSeries.dto';
import { UpdateSeriesDto } from '../dtos/updateSeries.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User } from 'src/users/entities/user.entity';

@Controller('series')
@UseGuards(AuthGuard())
@ApiTags('series')
@ApiBearerAuth()
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}
  @Get()
  getAllSeries() {
    return this.seriesService.getAllSeries();
  }
  @Get('/collection')
  getSeriesForUser(@GetUser() user: User) {
    return this.seriesService.getSeriesForUser(user.id);
  }
  @Get('/:id')
  getOneSeries(@Param('id') id: string) {
    return this.seriesService.findOneByID(id);
  }
  @Post()
  createSeries(@Body() series: CreateSeriesDto) {
    return this.seriesService.createSeries(series);
  }
  @Patch('/:id')
  updateSeries(
    @Param('id') id: string,
    @Body() updatedSeries: UpdateSeriesDto,
  ) {
    return this.seriesService.updateSeries(id, updatedSeries);
  }
  @Delete('/:id')
  deleteSeries(@Param('id') id: string) {
    return this.seriesService.deleteSeries(id);
  }
}
