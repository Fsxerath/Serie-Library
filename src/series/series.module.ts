import { Module } from '@nestjs/common';
import { SeriesService } from './services/series.service';
import { SeriesController } from './controllers/series.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Series } from './entities/series.entity';
import { AuthModule } from 'src/auth/auth.module';
import { TypeSerieModule } from 'src/types-serie/types-serie.module';

@Module({
  imports: [TypeOrmModule.forFeature([Series]), AuthModule, TypeSerieModule],
  providers: [SeriesService],
  controllers: [SeriesController],
})
export class SeriesModule {}
