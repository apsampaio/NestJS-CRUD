import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { PrismaClient, User } from '.prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaClient) {}

  async create(createUserDto: CreateUserDto): Promise<string> {
    // this.prisma.user.create({
    //   data: createUserDto,
    // });

    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
