import { Controller, Get, Param, Query, ParseUUIDPipe } from '@nestjs/common';
import { HotelService } from './hotel.service';

@Controller('api/v1/hotels')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Get()
  index(@Query() query: any) {
    return this.hotelService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.hotelService.findOneOrFail(id);
  }
}
