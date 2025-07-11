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
import { ApiBearerAuth, ApiProperty, ApiQuery, ApiTags } from '@nestjs/swagger';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User } from 'src/users/entities/user.entity';
import { PaginationParams } from 'src/shared/decorators/pagination-params.decorator';
import { Pagination } from 'src/shared/interfaces/pagination.interface';

@Controller('series')
@UseGuards(AuthGuard())
@ApiTags('series')
@ApiBearerAuth('access-token')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}
  @Get()
  @ApiQuery({
    name: 'page',
    type: Number,
    required: true,
    description: 'Number of page(ej. 0)',
  })
  @ApiQuery({
    name: 'limit',
    type: Number,
    required: true,
    description: 'Quantity of Items (ej. 10)',
  })
  getAllSeries(
    @GetUser() user: User,
    @PaginationParams() pagination: Pagination,
  ) {
    return this.seriesService.getAllSeries(user.id, pagination);
  }
  @ApiQuery({
    name: 'page',
    type: Number,
    required: true,
    description: 'Number of page(ej. 0)',
  })
  @ApiQuery({
    name: 'limit',
    type: Number,
    required: true,
    description: 'Quantity of Items (ej. 10)',
  })
  @Get('/collection')
  getSeriesForUser(
    @GetUser() user: User,
    @PaginationParams() pagination: Pagination,
  ) {
    return this.seriesService.getSeriesForUser(user.id, pagination);
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
