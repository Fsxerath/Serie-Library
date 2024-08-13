import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { SupplierService } from '../services/supplier.service';
import { RequestSupplierDto } from '../dtos/requestSupplier.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
@Controller('supplier')
@UseGuards(AuthGuard())
@ApiTags('supplier')
@ApiBearerAuth()
export class SupplierController {
  constructor(private readonly scraperServices: SupplierService) {}
  @Post()
  scrape(@Body() web: RequestSupplierDto) {
    return this.scraperServices.supplierWeb(web);
  }
}
