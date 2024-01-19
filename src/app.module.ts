import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SeriesModule } from './series/series.module';
import { ProgressModule } from './progress/progress.module';
import { DataSourceConfig } from './config/data.source';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeSerieModule } from './types-serie/types-serie.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({ ...DataSourceConfig }),
    UsersModule,
    SeriesModule,
    ProgressModule,
    TypeSerieModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
