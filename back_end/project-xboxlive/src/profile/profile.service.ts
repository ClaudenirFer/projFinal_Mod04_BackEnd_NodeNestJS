import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly _include = {
    favoriteGame: {
      select: {
        game: true,
      },
      user: {
        select: {
          name: true,
        },
      },
    },
  };

  create(data: CreateProfileDto) {
    return this.prisma.profile.create({
      data,
      include: this._include,
    });
  }

  findAll() {
    return this.prisma.profile.findMany({
      include: this._include,
    });
  }

  findOne(id: number) {
    return this.prisma.profile.findUnique({
      where: { id },
      include: this._include,
    });
  }

  update(id: number, data: UpdateProfileDto) {
    return this.prisma.profile.update({
      where: { id },
      data,
      include: this._include,
    });
  }

  remove(id: number) {
    return this.prisma.profile.delete({
      where: { id },
    });
  }
}
