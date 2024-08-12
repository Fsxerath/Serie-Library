import { Module } from '@nestjs/common';
import { SupplierController } from './controllers/supplier.controller';
import { SupplierService } from './services/supplier.service';
import { PuppeteerModule } from 'nestjs-pptr';
import { AuthModule } from 'src/auth/auth.module';
@Module({
  imports: [
    PuppeteerModule.forRoot({ launchOptions: { headless: true } }),
    AuthModule,
  ],
  controllers: [SupplierController],
  providers: [SupplierService],
})
export class SupplierModule {}
