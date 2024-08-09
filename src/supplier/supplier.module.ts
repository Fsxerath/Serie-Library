import { Module } from '@nestjs/common';
import { SupplierController } from './controllers/supplier.controller';
import { SupplierService } from './services/supplier.service';
import { PuppeteerModule } from 'nestjs-pptr';
@Module({
  imports: [PuppeteerModule.forRoot({ launchOptions: { headless: true } })],
  controllers: [SupplierController],
  providers: [SupplierService],
})
export class SupplierModule {}
