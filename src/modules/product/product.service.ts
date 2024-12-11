import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Customer, Prisma, Product } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async findAllProducts(): Promise<Product[]> {
    return await this.prisma.product.findMany();
  }
}
