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
          '.element-title, .text-muted, .element-description, .btn-collapse',
        );
        return {
          title: info[0].textContent.split('\n')[1].trim(),
          date: info[1].textContent,
          synopsis: info[2].textContent,
          chapters: info[3].textContent,
        };
      });
      await browser.close();
      return data;
    } catch (error) {
      throw new BadRequestException('The URL is invalid');
    }
  }
}
