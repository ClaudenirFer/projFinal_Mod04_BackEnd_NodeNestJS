import { FavoriteGameService } from './favorite-game.service';
import { CreateFavoriteGameDto } from './dto/create-favorite-game.dto';
import { UpdateFavoriteGameDto } from './dto/update-favorite-game.dto';
export declare class FavoriteGameController {
    private readonly favoriteGameService;
    constructor(favoriteGameService: FavoriteGameService);
    create(createFavoriteGameDto: CreateFavoriteGameDto): import(".prisma/client").Prisma.Prisma__FavoriteGameClient<import(".prisma/client").FavoriteGame & {
        profile: {
            title: string;
        };
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").FavoriteGame & {
        profile: {
            title: string;
        };
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__FavoriteGameClient<import(".prisma/client").FavoriteGame & {
        profile: {
            title: string;
        };
    }>;
    update(id: string, updateFavoriteGameDto: UpdateFavoriteGameDto): import(".prisma/client").Prisma.Prisma__FavoriteGameClient<import(".prisma/client").FavoriteGame & {
        profile: {
            title: string;
        };
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__FavoriteGameClient<import(".prisma/client").FavoriteGame>;
}
