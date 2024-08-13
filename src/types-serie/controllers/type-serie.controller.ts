import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { TypeSerieService } from '../services/type-serie.service';
import { CreateTypeSerieDto } from '../dtos/createTypeSerie.dto';
import { UpdateTypeSerieDto } from '../dtos/updateTypeSerie.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('typeSeries')
@UseGuards(AuthGuard())
@ApiTags('typeSeries')
@ApiBearerAuth()
export class TypeSerieController {
  constructor(private readonly typeSerieService: TypeSerieService) {}
  @Get()
  findAllTypes() {
    return this.typeSerieService.getAllTypeSeries();
  }
  @Post()
  createTypesSeries(@Body() series: CreateTypeSerieDto) {
    return this.typeSerieService.createTypeSerie(series);
  }
  @Patch('/:id')
  updateType(
    @Param('id') id: number,
    @Body() updatedTypeSeries: UpdateTypeSerieDto,
  ) {
    return this.typeSerieService.updateTypeSerie(id, updatedTypeSeries);
  }
}
