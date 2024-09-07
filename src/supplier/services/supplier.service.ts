import { BadRequestException, Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';
import { RequestSupplierDto } from '../dtos/requestSupplier.dto';
import { SupplierInfoDto } from '../dtos/supplierInfo.dto';

@Injectable()
export class SupplierService {
  async supplierWeb(web: RequestSupplierDto): Promise<SupplierInfoDto> {
    switch (web.name) {
      case 'TMO':
        return this.scrapTMO(web.url);
    }
  }

  async scrapTMO(url: string): Promise<SupplierInfoDto> {
    const browser = await puppeteer.launch();
    try {
      const page = await browser.newPage();
      page.setDefaultNavigationTimeout(2 * 60 * 1000);
      await Promise.all([page.waitForNavigation(), page.goto(url)]);
      const data: SupplierInfoDto = await page.evaluate(() => {
        const info = document.querySelectorAll(
          '.book-type, .book-thumbnail, .element-title, .text-muted, .element-description, .btn-collapse',
        );
        return {
          bookType: info[0].textContent,
          thumbnail: info[1].getAttribute('src'),
          title: info[2].textContent.split('\n')[1].trim(),
          date: info[3].textContent,
          synopsis: info[4].textContent,
          chapters: info[5].textContent,
        };
      });
      await browser.close();
      return data;
    } catch (error) {
      throw new BadRequestException('The URL is invalid');
    }
  }
}
