import { Injectable } from '@nestjs/common';
import { CrudVasyaService } from './crud_vasya/crud_vasya.service';

@Injectable()
export class AppService {
  constructor(private readonly crudVasyaService: CrudVasyaService) {}
  getHello(): string {
    return 'Hello World!';
  }
}
