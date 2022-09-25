import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { HotelModule } from './module/hotel/hotel.module';

@Module({
  imports: [ConfigModule.forRoot(), HotelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
