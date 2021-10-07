import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FavoriteGameService } from './favorite-game.service';
import { CreateFavoriteGameDto } from './dto/create-favorite-game.dto';
import { UpdateFavoriteGameDto } from './dto/update-favorite-game.dto';

@Controller('favorite-game')
export class FavoriteGameController {
  constructor(private readonly favoriteGameService: FavoriteGameService) {}

  @Post()
  create(@Body() createFavoriteGameDto: CreateFavoriteGameDto) {
    return this.favoriteGameService.create(createFavoriteGameDto);
  }

  @Get()
  findAll() {
    return this.favoriteGameService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.favoriteGameService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFavoriteGameDto: UpdateFavoriteGameDto) {
    return this.favoriteGameService.update(+id, updateFavoriteGameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favoriteGameService.remove(+id);
  }
}
