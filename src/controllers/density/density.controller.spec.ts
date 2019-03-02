import { Test, TestingModule } from '@nestjs/testing';
import { DensityController } from './density.controller';

describe('Density Controller', () => {
  let controller: DensityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DensityController],
    }).compile();

    controller = module.get<DensityController>(DensityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
