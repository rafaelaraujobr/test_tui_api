import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.$transaction([prisma.image.deleteMany(), prisma.hotel.deleteMany()]);

  await prisma.hotel.create({
    data: {
      name: 'OCEAN DRIVE MADRID',
      country: 'Spain',
      city: 'Madrid',
      currency: 'EUR',
      region: 'Community Of Madrid',
      adults: 2,
      price_per_person: 300,
      star_rating: 4,
      images: {
        create: [
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/88/885026/885026a_hb_r_001.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/88/885026/885026a_hb_ro_030.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/88/885026/885026a_hb_r_002.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/88/885026/885026a_hb_r_003.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/88/885026/885026a_hb_ro_032.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/88/885026/885026a_hb_ro_031.jpg',
          },
        ],
      },
    },
  });
  console.log('Hotel Spain created');
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
