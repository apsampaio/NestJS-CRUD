import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { PrismaClient, User } from '@prisma/client';
import { CreateUniqueID } from './services/CreateUniqueID.service';
import { HashPassword } from './services/HashPassword.service';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaClient,
    private createUniqueID: CreateUniqueID,
    private hashPassword: HashPassword,
  ) {}

  async create({ email, name, password, admin }: CreateUserDto): Promise<User> {
    const { uuid } = this.createUniqueID.execute();

    const { hashed_password } = await this.hashPassword.execute({ password });

    const user = await this.prisma.user.create({
      data: {
        id: uuid,
        password: hashed_password,
        email,
        name,
        admin,
      },
    });

    delete user.password;

    return user;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
