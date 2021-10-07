import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteGameService } from './favorite-game.service';

describe('FavoriteGameService', () => {
  let service: FavoriteGameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoriteGameService],
    }).compile();

    service = module.get<FavoriteGameService>(FavoriteGameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
