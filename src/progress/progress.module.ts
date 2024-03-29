import { Module } from '@nestjs/common';
import { ProgressController } from './controllers/progress.controller';
import { ProgressService } from './services/progress.service';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Progress } from './entities/progress.entity';
import { SeriesModule } from 'src/series/series.module';

@Module({
  imports: [TypeOrmModule.forFeature([Progress]), AuthModule, SeriesModule],
  controllers: [ProgressController],
  providers: [ProgressService],
})
export class ProgressModule {}
