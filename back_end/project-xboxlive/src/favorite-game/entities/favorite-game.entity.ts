import { Prisma } from '.prisma/client';

export class FavoriteGame implements Prisma.FavoriteGameUncheckedCreateInput {
  id?: number;
  profileId: number;
  gameId: number;
}
