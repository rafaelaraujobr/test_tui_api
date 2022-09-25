import { Hotel, Image } from '@prisma/client';

export class HotelEntity implements Hotel {
  region: string;
  price_per_person: number;
  id: string;
  name: string;
  country: string;
  city: string;
  star_rating: number;
  currency: string;
  adults: number;
  images: Image[];
}
