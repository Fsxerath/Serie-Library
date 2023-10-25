import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SerieModule } from './serie/serie.module';
import { ProgressModule } from './progress/progress.module';

@Module({
  imports: [UserModule, SerieModule, ProgressModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
