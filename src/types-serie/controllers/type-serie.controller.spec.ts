import { Test, TestingModule } from '@nestjs/testing';
import { TypeSerieController } from './type-serie.controller';

describe('TypeSerieController', () => {
  let controller: TypeSerieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeSerieController],
    }).compile();

    controller = module.get<TypeSerieController>(TypeSerieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
