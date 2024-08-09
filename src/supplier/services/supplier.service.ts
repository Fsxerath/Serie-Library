import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';
import { WebDto } from '../dtos/web.dto';
import { ScrapInfoDto } from '../dtos/scrapinfo.dto';

@Injectable()
export class SupplierService {
  async scrapTMO(web: WebDto): Promise<ScrapInfoDto> {
    const browser = await puppeteer.launch();
    try {
      const page = await browser.newPage();
      page.setDefaultNavigationTimeout(2 * 60 * 1000);
      await Promise.all([page.waitForNavigation(), page.goto(web.url)]);
      const data: ScrapInfoDto = await page.evaluate(() => {
        const info = document.querySelectorAll(
          '.element-title, .text-muted, .element-description, .btn-collapse',
        );
        return {
          title: info[0].textContent.split('\n')[1].trim(),
          date: info[1].textContent,
          synopsis: info[2].textContent,
          chapters: info[3].textContent,
        };
      });
      return data;
    } finally {
      await browser.close();
    }
  }
}
