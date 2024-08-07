import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';

@Injectable()
export class ScraperService {
  async findTitle() {
    const browser = await puppeteer.launch();
    try {
      const page = await browser.newPage();
      page.setDefaultNavigationTimeout(2 * 60 * 1000);
      await Promise.all([
        page.waitForNavigation(),
        page.goto(
          'https://visortmo.com/library/manga/13698/komisanwacomyushoudesu',
        ),
      ]);
      const data = await page.evaluate(() => {
        const info = document.querySelectorAll(
          '.element-title, .text-muted, .element-description, .btn-collapse',
        );
        return {
          title: info[0].textContent.split('\n')[1].trim(),
          date: info[1].textContent,
          description: info[2].textContent,
          chapters: info[3].textContent,
        };
      });
      console.log(data);
    } finally {
      await browser.close();
    }
  }
}
