import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteGameController } from './favorite-game.controller';
import { FavoriteGameService } from './favorite-game.service';

describe('FavoriteGameController', () => {
  let controller: FavoriteGameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoriteGameController],
      providers: [FavoriteGameService],
    }).compile();

    controller = module.get<FavoriteGameController>(FavoriteGameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
