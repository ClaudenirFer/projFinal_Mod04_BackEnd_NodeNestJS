import { Prisma } from "@prisma/client";
import { User } from "../entities/user.entity";
export declare class CreateUserDto extends User {
    name: string;
    surname: string;
    cpf: string;
    email: string;
    password: string;
    profile?: Prisma.ProfileUncheckedCreateNestedManyWithoutUserInput;
}
