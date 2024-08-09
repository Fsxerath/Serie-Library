import { Body, Controller, Post } from '@nestjs/common';
import { ScraperService } from '../services/scraper.service';
import { WebDto } from '../dtos/web.dto';
@Controller('scraper')
export class ScraperController {
  constructor(private readonly scraperServices: ScraperService) {}
  @Post()
  scrape(@Body() web: WebDto) {
    return this.scraperServices.scrapTMO(web);
  }
}
