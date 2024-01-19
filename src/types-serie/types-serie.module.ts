import { Module } from '@nestjs/common';
import { TypeSerieController } from './controllers/type-serie.controller';
import { TypeSerieService } from './services/type-serie.service';

@Module({
  controllers: [TypeSerieController],
  providers: [TypeSerieService],
})
export class TypeSerieModule {}
