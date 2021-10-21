import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly _include;
    create(dto: CreateUserDto): Promise<{
        cratedUser: import(".prisma/client").User;
        password: any;
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").User & {
        profiles: {
            id: number;
            nickname: string;
            image: string;
        }[];
    })[]>;
    findById(id: number): Prisma.Prisma__UserClient<import(".prisma/client").User & {
        profiles: {
            id: number;
            nickname: string;
            image: string;
        }[];
    }>;
    findByEmail(email: string): Prisma.Prisma__UserClient<import(".prisma/client").User>;
    update(id: number, data: UpdateUserDto): Prisma.Prisma__UserClient<import(".prisma/client").User & {
        profiles: {
            id: number;
            nickname: string;
            image: string;
        }[];
    }>;
    remove(id: number): Prisma.Prisma__UserClient<import(".prisma/client").User>;
}
