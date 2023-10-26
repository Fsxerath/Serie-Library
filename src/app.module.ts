import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SeriesModule } from './series/series.module';
import { ProgressModule } from './progress/progress.module';

@Module({
  imports: [UsersModule, SeriesModule, ProgressModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
