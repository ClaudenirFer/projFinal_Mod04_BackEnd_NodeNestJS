import { Prisma } from '@prisma/client';

export class Game implements Prisma.GameUncheckedCreateInput {
  id?: number;
  title: string;
  description: string;
  year: number;
  imdb: string;
  youtubeUrl?: string;
  gameplayUrl?: string;
  profile?: Prisma.FavoriteGameUncheckedCreateNestedManyWithoutGameInput;
  genre?: Prisma.GameGenreUncheckedCreateNestedManyWithoutGameInput;
}
