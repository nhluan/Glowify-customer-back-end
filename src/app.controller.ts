import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CustomerService } from './customer/customer.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly customerService: CustomerService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/customer')
  getCustomer(): object {
    return this.customerService.findCustomer('12');
  }
}
