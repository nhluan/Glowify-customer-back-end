import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Customer, Prisma } from '@prisma/client';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  findCustomer(id: string) {
    return {
      id: 'test',
      lastName: 'Nguyen',
      firstName: 'Luan',
      email: 'nhluan.official@gmail.com',
      password: 'test123',
      status: true,
    };
  }
}
