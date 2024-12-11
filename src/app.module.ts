import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'; // Import ConfigModule
import { CustomerService } from './modules/customer/customer.service';
import { PrismaService } from './prisma.service';
import { ProductService } from './modules/product/product.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Load environment variables globally
  ],
  controllers: [AppController],
  providers: [AppService, CustomerService, PrismaService, ProductService],
})
export class AppModule {}
