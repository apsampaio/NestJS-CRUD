import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

import { CreateUniqueID } from './services/CreateUniqueID.service';
import { PrismaClient } from '@prisma/client';
import { HashPassword } from './services/HashPassword.service';

@Module({
  controllers: [UserController],
  providers: [UserService, CreateUniqueID, PrismaClient, HashPassword],
})
export class UserModule {}
