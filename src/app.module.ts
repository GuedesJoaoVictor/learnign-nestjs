import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import * as dotenv from 'dotenv';
import path from 'path';
import { PrismaService } from './database/prisma.service';

dotenv.config({
  path: path.resolve(__dirname, '..', '.env'),
});

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
