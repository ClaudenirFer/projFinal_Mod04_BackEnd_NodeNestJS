import { Prisma } from "@prisma/client";
import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Game } from "../entities/game.entity";

export class CreateGameDto extends Game {
    @IsString()
    @IsNotEmpty()
    title:         string;

    @IsString()
    @IsNotEmpty()
    description:   string;

    @IsInt()
    @IsNotEmpty()
    year:          number;

    @IsString()
    @IsNotEmpty()
    imdb:          string;

    @IsString()
    @IsOptional()
    youtubeUrl?:   string | null;

    @IsString()
    @IsOptional()
    gameplayUrl?:  string | null;

    @IsInt()
    @IsOptional()
    profile?:      Prisma.FavoriteGameUncheckedCreateNestedManyWithoutGameInput;
    
    @IsInt()
    @IsOptional()
    genre?:        Prisma.GameGenreUncheckedCreateNestedManyWithoutGameInput;
}

