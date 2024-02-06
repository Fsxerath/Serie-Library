import { Controller, Get, UseGuards } from '@nestjs/common';
import { SeriesService } from '../services/series.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('series')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}
  @Get()
  @UseGuards(AuthGuard())
  async getAllSeries() {
    return await this.seriesService.getAllSeries();
  }
}
