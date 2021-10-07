import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFavoriteGameDto } from './dto/create-favorite-game.dto';
import { UpdateFavoriteGameDto } from './dto/update-favorite-game.dto';

@Injectable()
export class FavoriteGameService {
  constructor (private readonly prisma: PrismaService) {}

  private readonly _include = {
    profile: {
      select: {
        title: true
      },
      game: {
        select: {
          title: true
        }
      }
    }
  }

  create(data: CreateFavoriteGameDto) {
    return this.prisma.favoriteGame.create({
      data,
      include: this._include
      }
    );
  }

  findAll() {
    return this.prisma.favoriteGame.findMany({
      include: this._include
    })
  }

  findOne(id: number) {
    return this.prisma.favoriteGame.findUnique({
      where: {id},
      include: this._include
    })
  }

  update(id: number, data: UpdateFavoriteGameDto) {
    return this.prisma.favoriteGame.update({
      where: {id},
      data,
      include: this._include
    });
  }

  remove(id: number) {
    return this.prisma.favoriteGame.delete({
      where: {id}
    });
  }
}
