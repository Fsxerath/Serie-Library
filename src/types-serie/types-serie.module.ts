import { Module } from '@nestjs/common';
import { TypeSerieController } from './controllers/type-serie.controller';
import { TypeSerieService } from './services/type-serie.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Typeserie } from './entities/typeSerie.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Typeserie]), AuthModule],
  controllers: [TypeSerieController],
  providers: [TypeSerieService],
  exports: [TypeSerieService],
})
export class TypeSerieModule {}
