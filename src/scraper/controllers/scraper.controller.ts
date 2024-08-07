import { Controller, Get } from '@nestjs/common';
import { ScraperService } from '../services/scraper.service';
@Controller('scraper')
export class ScraperController {
  constructor(private readonly scraperServices: ScraperService) {}
  @Get()
  scrape() {
    return this.scraperServices.findTitle();
  }
}
