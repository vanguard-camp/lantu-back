import { Controller, Get, Version } from '@nestjs/common';
import { AppService } from './app.service';
import { BusinessException } from './common/exceptions/business.exception';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Version('1')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('findError')
  @Version('1')
  findError(): string {
    const a: any = {};
    console.log(a.b.c);

    return this.appService.getHello();
  }

  @Get('findBusinessError')
  @Version('1')
  findBusinessError(): string {
    const a: any = {};
    try {
      console.log(a.b.c);
    } catch (error) {
      throw new BusinessException('参数错误');
    }

    return this.appService.getHello();
  }
}
