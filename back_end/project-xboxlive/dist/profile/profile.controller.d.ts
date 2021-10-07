import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    create(createProfileDto: CreateProfileDto): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile & {
        favoriteGame: {
            game: import(".prisma/client").Game;
        }[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Profile & {
        favoriteGame: {
            game: import(".prisma/client").Game;
        }[];
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile & {
        favoriteGame: {
            game: import(".prisma/client").Game;
        }[];
    }>;
    update(id: string, updateProfileDto: UpdateProfileDto): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile & {
        favoriteGame: {
            game: import(".prisma/client").Game;
        }[];
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile>;
}
