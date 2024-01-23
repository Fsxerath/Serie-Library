import { Module } from '@nestjs/common';
import { TypeSerieController } from './controllers/type-serie.controller';
import { TypeSerieService } from './services/type-serie.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Typeserie } from './entities/typeSerie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Typeserie])],
  controllers: [TypeSerieController],
  providers: [TypeSerieService],
})
export class TypeSerieModule {}
