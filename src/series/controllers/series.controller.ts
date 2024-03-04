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

@Controller('series')
@UseGuards(AuthGuard())
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}
  @Get()
  getAllSeries() {
    return this.seriesService.getAllSeries();
  }
  @Post()
  createSeries(@Body() series: CreateSeriesDto) {
    return this.seriesService.createSeries(series);
  }
  @Patch('/:id')
  updateSeries(
    @Body() updatedSeries: Partial<UpdateSeriesDto>,
    @Param('id') id: string,
  ) {
    return this.seriesService.updateSeries(id, updatedSeries);
  }
  @Delete('/:id')
  deleteSeries(@Param('id') id: string) {
    return this.seriesService.deleteSeries(id);
  }
}
