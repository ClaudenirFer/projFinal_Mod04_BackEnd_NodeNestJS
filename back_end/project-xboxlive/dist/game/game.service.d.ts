import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
export declare class GameService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly _include;
    create(data: CreateGameDto): import(".prisma/client").Prisma.Prisma__GameClient<import(".prisma/client").Game & {
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
    findOne(id: number): import(".prisma/client").Prisma.Prisma__GameClient<import(".prisma/client").Game & {
        profile: {
            profile: import(".prisma/client").Profile;
        }[];
        genre: {
            genre: import(".prisma/client").Genre;
        }[];
    }>;
    update(id: number, data: UpdateGameDto): import(".prisma/client").Prisma.Prisma__GameClient<import(".prisma/client").Game & {
        profile: {
            profile: import(".prisma/client").Profile;
        }[];
        genre: {
            genre: import(".prisma/client").Genre;
        }[];
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__GameClient<import(".prisma/client").Game>;
}