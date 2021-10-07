import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
export declare class GenreService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly _include;
    create(data: CreateGenreDto): import(".prisma/client").Prisma.Prisma__GenreClient<import(".prisma/client").Genre & {
        game: {
            game: import(".prisma/client").Game;
        }[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Genre[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__GenreClient<import(".prisma/client").Genre & {
        game: {
            game: import(".prisma/client").Game;
        }[];
    }>;
    update(id: number, data: UpdateGenreDto): import(".prisma/client").Prisma.Prisma__GenreClient<import(".prisma/client").Genre & {
        game: {
            game: import(".prisma/client").Game;
        }[];
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__GenreClient<import(".prisma/client").Genre>;
}
