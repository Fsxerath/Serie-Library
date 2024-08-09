import { Body, Controller, Post } from '@nestjs/common';
import { SupplierService } from '../services/supplier.service';
import { WebDto } from '../dtos/web.dto';
@Controller('supplier')
export class SupplierController {
  constructor(private readonly scraperServices: SupplierService) {}
  @Post()
  scrape(@Body() web: WebDto) {
    return this.scraperServices.scrapTMO(web);
  }
}
