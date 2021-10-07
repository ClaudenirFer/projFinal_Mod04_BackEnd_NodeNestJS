import { Prisma } from ".prisma/client";

export class Genre implements Prisma.GenreUncheckedCreateInput{
    id?: number;
    type: string;
    game?: Prisma.GameGenreUncheckedCreateNestedManyWithoutGenreInput;
}
