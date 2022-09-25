import { Module } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelController } from './hotel.controller';
import { HotelRepository } from './hotel.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [HotelController],
  providers: [HotelService, PrismaService, HotelRepository],
})
export class HotelModule {}
