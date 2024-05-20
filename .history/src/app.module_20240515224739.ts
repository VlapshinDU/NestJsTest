import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestControllerController } from './test-controller/test-controller.controller';
import { CrudVasyaModule } from './crud_vasya/crud_vasya.module';

@Module({
  imports: [CrudVasyaModule],
  controllers: [AppController, TestControllerController],
  providers: [AppService],
})
export class AppModule {}
