import { Controller } from "@nestjs/common"

@Controller('users')
export class userController () {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
      return this.appService.getHello();
    }
}

