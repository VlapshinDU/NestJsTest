import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudVasyaService } from './crud_vasya/crud_vasya.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CrudVasyaService],
})
export class AppModule {}
