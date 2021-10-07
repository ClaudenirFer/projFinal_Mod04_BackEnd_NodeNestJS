import { Module } from '@nestjs/common';
import { FavoriteGameService } from './favorite-game.service';
import { FavoriteGameController } from './favorite-game.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FavoriteGameController],
  providers: [FavoriteGameService, PrismaService]
})
export class FavoriteGameModule {}
