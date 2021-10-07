import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Injectable()
export class GenreService {
  constructor (private readonly prisma: PrismaService) {}
  private readonly _include = {
    game: {
      select: {
        game: true
      }
    }
  }

  create(data: CreateGenreDto) {
    return this.prisma.genre.create({
      data,
      include: this._include
    });
  }

  findAll() {
    return this.prisma.genre.findMany();
  }

  findOne(id: number) {
    return this.prisma.genre.findUnique({
      where: {id},
      include: this._include
    });
  }

  update(id: number, data: UpdateGenreDto) {
    return this.prisma.genre.update({
      where: {id},
      data,
      include: this._include
    });
  }

  remove(id: number) {
    return this.prisma.genre.delete({
      where: {id}
    });
  }
}
