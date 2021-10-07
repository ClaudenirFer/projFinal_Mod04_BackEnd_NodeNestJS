import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFavoriteGameDto } from './dto/create-favorite-game.dto';
import { UpdateFavoriteGameDto } from './dto/update-favorite-game.dto';
export declare class FavoriteGameService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly _include;
    create(data: CreateFavoriteGameDto): import(".prisma/client").Prisma.Prisma__FavoriteGameClient<import(".prisma/client").FavoriteGame & {
        profile: {
            title: string;
        };
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").FavoriteGame & {
        profile: {
            title: string;
        };
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__FavoriteGameClient<import(".prisma/client").FavoriteGame & {
        profile: {
            title: string;
        };
    }>;
    update(id: number, data: UpdateFavoriteGameDto): import(".prisma/client").Prisma.Prisma__FavoriteGameClient<import(".prisma/client").FavoriteGame & {
        profile: {
            title: string;
        };
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__FavoriteGameClient<import(".prisma/client").FavoriteGame>;
}
