import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { UserDTO } from './core/dtos/user.dto';

@Controller()
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async getHello(): Promise<{ message: string }> {
    const member: UserDTO = await this.prismaService.user.create({
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
