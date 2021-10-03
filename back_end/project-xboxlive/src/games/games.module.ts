import { Module } from '@nestjs/common';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';

@Module({    
  imports: [GamesModule],
  controllers: [GamesController], // Controla as rotas
  providers: [GamesService],// Provddores de Métodos
})
export class GamesModule {}
