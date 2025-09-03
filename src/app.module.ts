import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import * as dotenv from 'dotenv';
import path from 'path';
import { PrismaService } from './database/prisma.service';
import { UserModule } from './module/user.module';
import { LoginModule } from './module/login.module';

dotenv.config({
  path: path.resolve(__dirname, '..', '.env'),
});

@Module({
  imports: [UserModule, LoginModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
