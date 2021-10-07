import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class ProfileService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly _include;
    create(data: CreateProfileDto): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile & {
        favoriteGame: {
            game: import(".prisma/client").Game;
        }[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Profile & {
        favoriteGame: {
            game: import(".prisma/client").Game;
        }[];
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile & {
        favoriteGame: {
            game: import(".prisma/client").Game;
        }[];
    }>;
    update(id: number, data: UpdateProfileDto): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile & {
        favoriteGame: {
            game: import(".prisma/client").Game;
        }[];
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile>;
}
