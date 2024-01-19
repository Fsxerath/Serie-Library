import { Test, TestingModule } from '@nestjs/testing';
import { TypeSerieService } from './type-serie.service';

describe('TypeSerieService', () => {
  let service: TypeSerieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeSerieService],
    }).compile();

    service = module.get<TypeSerieService>(TypeSerieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
