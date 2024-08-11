import { Body, Controller, Post } from '@nestjs/common';
import { SupplierService } from '../services/supplier.service';
import { RequestSupplierDto } from '../dtos/requestSupplier.dto';
@Controller('supplier')
export class SupplierController {
  constructor(private readonly scraperServices: SupplierService) {}
  @Post()
  scrape(@Body() web: RequestSupplierDto) {
    return this.scraperServices.supplierWeb(web);
  }
}
