import { Body, Controller, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { TypeSerieService } from '../services/type-serie.service';
import { CreateTypeSerieDto } from '../dtos/createTypeSerie.dto';
import { UpdateTypeSerieDto } from '../dtos/updateTypeSerie.dto';

@Controller('typeSeries')
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
    @Req() req: Request,
    @Body() updatedTypeSeries: Partial<UpdateTypeSerieDto>,
    @Param('id') id: number,
  ) {
    return this.typeSerieService.updateTypeSerie(id, updatedTypeSeries);
  }
}
