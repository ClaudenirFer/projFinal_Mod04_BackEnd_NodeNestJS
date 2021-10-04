import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { GameModule } from './game/game.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  
  imports: [GameModule],
  controllers: [AppController], // Controla as rotas
  providers: [AppService, PrismaService]// Provddores de Métodos
})
export class AppModule {}
