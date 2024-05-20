import { Module } from '@nestjs/common';
import { CrudVasyaService } from './crud_vasya.service';
import { CrudVasyaController } from './crud_vasya.controller';

@Module({
  controllers: [CrudVasyaController],
  providers: [CrudVasyaService],
  exports: [CrudVasyaService],
})
export class CrudVasyaModule {}
