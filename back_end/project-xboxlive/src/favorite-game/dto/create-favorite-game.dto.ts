// import { Prisma } from "@prisma/client";
import { IsInt, IsNotEmpty } from "class-validator";
import { FavoriteGame } from "../entities/favorite-game.entity";


export class CreateFavoriteGameDto extends FavoriteGame {
    @IsNotEmpty()
    @IsInt()
    profileId: number;
    @IsNotEmpty()
    @IsInt()
    gameId: number;
}
