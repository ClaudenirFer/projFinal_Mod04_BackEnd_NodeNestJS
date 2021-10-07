import { Prisma } from ".prisma/client";
export declare class FavoriteGame implements Prisma.FavoriteGameUncheckedCreateInput {
    id?: number;
    profileId: number;
    gameId: number;
}
