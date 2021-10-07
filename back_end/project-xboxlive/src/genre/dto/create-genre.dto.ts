import { Prisma } from "@prisma/client";
import { Genre } from "../entities/genre.entity";

export class CreateGenreDto extends Genre {
    type: string
    game?: Prisma.GameGenreUncheckedCreateNestedManyWithoutGenreInput;
    
}
