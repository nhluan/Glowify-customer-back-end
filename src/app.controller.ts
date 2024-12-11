import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CustomerService } from './modules/customer/customer.service';
import { Product } from '@prisma/client';
import { ProductService } from './modules/product/product.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly customerService: CustomerService,
    private readonly productService: ProductService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/customer')
  getCustomer(): object {
    return this.customerService.findCustomer('12');
  }

  @Get('products')
  getAllProducts(): Promise<Product[]> {
    return this.productService.findAllProducts();
  }
}
