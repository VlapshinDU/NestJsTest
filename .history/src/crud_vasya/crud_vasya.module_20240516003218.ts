import { Global, Module } from '@nestjs/common';
import { CrudVasyaService } from './crud_vasya.service';
import { CrudVasyaController } from './crud_vasya.controller';
@Global
@Module({
  controllers: [CrudVasyaController],
  providers: [CrudVasyaService],
})
export class CrudVasyaModule {}
