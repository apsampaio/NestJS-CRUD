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

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(id: string): Promise<User | undefined> {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return await this.prisma.user.update({
      data: updateUserDto,
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
