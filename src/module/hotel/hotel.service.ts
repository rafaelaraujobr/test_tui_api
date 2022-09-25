import { Injectable, NotFoundException } from '@nestjs/common';
import { HotelRepository } from './hotel.repository';
@Injectable()
export class HotelService {
  constructor(private readonly hotelRepository: HotelRepository) {}
  findAll(query: any) {
    return this.hotelRepository.findAll(query);
  }

  findOneOrFail(id: string) {
    try {
      return this.hotelRepository.findOne(id);
    } catch (error) {
      throw new NotFoundException('Hotel not found');
    }
  }
}
