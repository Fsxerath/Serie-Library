import { Injectable } from '@nestjs/common';
import { InjectCore, PuppeteerCore } from 'nestjs-pptr';

@Injectable()
export class ScraperService {
  constructor(@InjectCore() private readonly puppeter: PuppeteerCore) {}
}
