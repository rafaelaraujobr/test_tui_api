import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class HotelRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(query: any) {
    let { page, perPage, orderBy, sort, country } = query;
    country = country ? country.split(',') : [];
    sort = sort || 'desc';
    page = page || 1;
    orderBy = { [orderBy || 'created_at']: sort || 'desc' };
    perPage = perPage || 5;
    const offset = (page - 1) * perPage;
    const limit = parseInt(perPage);
    const where = {
      name: query.name,
      city: query.city,
      region: query.region,
      OR: [
        { name: { contains: query.search || '' } },
        { country: { contains: query.search || '' } },
        { city: { contains: query.search || '' } },
        { region: { contains: query.search || '' } },
      ],
    };

    const select = {
      id: true,
      name: true,
      country: true,
      city: true,
      region: true,
      star_rating: true,
      price_per_person: true,
      currency: true,
      adults: true,
      images: { select: { url: true } },
      created_at: true,
    };
    const [records, total] = await this.prisma.$transaction([
      this.prisma.hotel.findMany({
        skip: offset,
        take: limit,
        where: country.length > 0 ? { ...where, country: { in: country } } : where,
        orderBy,
        select,
      }),
      this.prisma.hotel.count({ where: country.length > 0 ? { ...where, country: { in: country } } : where }),
    ]);
    return { total, pages: Math.ceil(total / limit), records };
  }

  async findOne(id: string) {
    const select = {
      id: true,
      name: true,
      country: true,
      city: true,
      region: true,
      star_rating: true,
      price_per_person: true,
      currency: true,
      adults: true,
      images: { select: { url: true } },
      created_at: true,
    };
    return await this.prisma.hotel.findUnique({ where: { id }, select });
  }
}
