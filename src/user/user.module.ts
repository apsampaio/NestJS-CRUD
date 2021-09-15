import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

import { CreateUniqueID } from './services/CreateUniqueID.service';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [UserController],
  providers: [UserService, CreateUniqueID, PrismaClient],
})
export class UserModule {}
