import { Module } from '@nestjs/common';
import { ScraperController } from './controllers/scraper.controller';
import { ScraperService } from './services/scraper.service';
import { PuppeteerModule } from 'nestjs-pptr';
@Module({
  imports: [PuppeteerModule.forRoot({ launchOptions: { headless: true } })],
  controllers: [ScraperController],
  providers: [ScraperService],
})
export class ScraperModule {}
