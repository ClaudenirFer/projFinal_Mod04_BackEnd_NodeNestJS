import { Prisma } from '.prisma/client';

export class User implements Prisma.UserUncheckedCreateInput {
  id?: number;
  name: string;
  surname: string;
  cpf: string;
  email: string;
  password: string;
  profile?: Prisma.ProfileUncheckedCreateNestedManyWithoutUserInput;
}
