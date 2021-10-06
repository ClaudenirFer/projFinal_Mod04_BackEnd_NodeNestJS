import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
export declare class GameController {
    private readonly gameService;
    constructor(gameService: GameService);
    create(createGameDto: CreateGameDto): import(".prisma/client").Prisma.Prisma__GameClient<import(".prisma/client").Game & {
        profile: {
            profile: import(".prisma/client").Profile;
        }[];
        genre: {
            genre: import(".prisma/client").Genre;
        }[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Game & {
        profile: {
            profile: import(".prisma/client").Profile;
        }[];
        genre: {
            genre: import(".prisma/client").Genre;
        }[];
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__GameClient<import(".prisma/client").Game & {
        profile: {
            profile: import(".prisma/client").Profile;
        }[];
        genre: {
            genre: import(".prisma/client").Genre;
        }[];
    }>;
    update(id: string, updateGameDto: UpdateGameDto): import(".prisma/client").Prisma.Prisma__GameClient<import(".prisma/client").Game & {
        profile: {
            profile: import(".prisma/client").Profile;
        }[];
        genre: {
            genre: import(".prisma/client").Genre;
        }[];
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__GameClient<import(".prisma/client").Game>;
}
