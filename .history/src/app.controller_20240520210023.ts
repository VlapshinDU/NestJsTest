import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Param() id): string {
    return this.appService.getHello();
  }

  @Post()
  setData(@Body() body, @Param() id) {
    console.log(body);
    console.log('Это параметр запроса -' + { id });
  }
}
