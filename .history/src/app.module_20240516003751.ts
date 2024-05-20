import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudVasyaModule } from './crud_vasya/crud_vasya.module';

@Module({
  imports: [CrudVasyaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
