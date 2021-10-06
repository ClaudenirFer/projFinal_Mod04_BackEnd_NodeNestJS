import { Prisma } from "@prisma/client";
import { Game } from "../entities/game.entity";
export declare class CreateGameDto extends Game {
    title: string;
    description: string;
    year: number;
    imdb: string;
    youtubeUrl?: string | null;
    gameplayUrl?: string | null;
    profile?: Prisma.FavoriteGameUncheckedCreateNestedManyWithoutGameInput;
    genre?: Prisma.GameGenreUncheckedCreateNestedManyWithoutGameInput;
}
