import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class userController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): string {
    return this.userService.getUser();
  }
}
