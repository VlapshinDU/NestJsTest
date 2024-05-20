import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CrudVasyaModule],
  controllers: [AppController],
  providers: [AppService, crud_vasya.module],
})
export class AppModule {}
