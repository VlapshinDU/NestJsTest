import { Injectable } from '@nestjs/common';

@Injectable()
export class userService {
  constructor() {}

  getUser(): string {
    return 'user';
  }
}
