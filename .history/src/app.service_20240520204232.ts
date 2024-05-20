import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly crudVasyaService: CrudVasyaService) {}
  getHello(): string {
    return 'Hello World!';
  }
}
