import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
type MyResType = {
  permission: boolean;
};
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(@Param() id, @Query() key): string {
  //   console.log(id);
  //   console.log('QUERY  -' + JSON.stringify(key));
  //   return this.appService.getHello();
  // }

  @Post()
  setData(@Body() body, @Query() key) {
    console.log(body);
    console.log('Это параметр query -' + JSON.stringify(key));
  }

  @Get()
  findAll(@Res() res: Response) {
    return;
  }
}
