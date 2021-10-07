import { Prisma } from "@prisma/client";
import { IsInt, IsNotEmpty, IsOptional, IsString, IsUrl } from "class-validator";
import { User } from "../entities/user.entity";

export class CreateUserDto extends User {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    surname: string;

    @IsString()
    @IsNotEmpty()
    cpf: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsInt()
    @IsOptional()
    profile?: Prisma.ProfileUncheckedCreateNestedManyWithoutUserInput;
}
