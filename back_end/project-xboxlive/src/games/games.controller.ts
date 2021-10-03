import { Controller, Get, Param } from '@nestjs/common';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
    constructor(private gamesService: GamesService) {}
    
    @Get()
    findAll(){
        return this.gamesService.findAll()
    }
    
    @Get(':id')
    getById(@Param() parans) {
        return this.gamesService.findById(+parans.id)
    }

    
}
