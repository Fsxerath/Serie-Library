import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { SeriesModule } from './series/series.module';
import { ProgressModule } from './progress/progress.module';
import { DataSourceConfig } from './config/data.source';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeSerieModule } from './types-serie/types-serie.module';
import { AuthModule } from './auth/auth.module';
import { ScrapperModule } from './scrapper/scrapper.module';
import { ScrapperController } from './controllers/scrapper/scrapper.controller';
import { ScrapperController } from './controllers/scrapper.controller';
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
    AuthModule,
    ScrapperModule,
  ],
  controllers: [AppController, ScrapperController],
  providers: [],
})
export class AppModule {}
