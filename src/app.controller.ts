import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { User } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async getHello(): Promise<{ message: string }> {
    const member: User = await this.prismaService.user.create({
      data: {
        email: 'guedes@email.com',
        name: 'Guedes',
        password: '123456',
        matricula: '202211475',
        tipo: 'ADMIN',
      },
    });

    console.log(member);

    return {
      message: 'Hello World!',
    };
  }
}
