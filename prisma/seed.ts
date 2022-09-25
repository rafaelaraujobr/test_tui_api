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
  await prisma.hotel.create({
    data: {
      name: 'Hotel Ibiltze',
      country: 'Spain',
      city: 'Lasarte-oria',
      currency: 'EUR',
      region: 'Autonomous Community Of The Basque Country',
      adults: 2,
      price_per_person: 78.41,
      star_rating: 1,
      images: {
        create: [
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/39/394300/394300a_hb_r_001.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/39/394300/394300a_hb_ro_005.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/39/394300/394300a_hb_r_002.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/39/394300/394300a_hb_r_003.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/39/394300/394300a_hb_l_001.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/39/394300/394300a_hb_ro_007.jpg',
          },
          {
            url: 'https://i.travelapi.com/hotels/10000000/9560000/9559100/9559089/61a2febb_b.jpg',
          },
        ],
      },
    },
  });
  await prisma.hotel.create({
    data: {
      name: 'Hotel EuroPark',
      country: 'Spain',
      city: 'Barcelona',
      currency: 'EUR',
      region: 'Catalonia',
      adults: 2,
      price_per_person: 160.06,
      star_rating: 1,
      images: {
        create: [
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/001053/001053a_hb_r_001.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/001053/001053a_hb_r_002.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/001053/001053a_hb_a_030.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/001053/001053a_hb_r_003.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/001053/001053a_hb_a_031.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/001053/001053a_hb_f_002.jpg',
          },
          {
            url: 'https://i.travelapi.com/hotels/1000000/570000/562100/562080/b7f468a7_b.jpg',
          },
        ],
      },
    },
  });
  await prisma.hotel.create({
    data: {
      name: 'HOTEL AJ GRAN ALACAN',
      country: 'Spain',
      city: 'Santa Pola',
      currency: 'EUR',
      region: 'Valencian Community',
      adults: 2,
      price_per_person: 65,
      star_rating: 4,
      images: {
        create: [
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/83/838592/838592a_hb_r_001.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/83/838592/838592a_hb_ro_038.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/83/838592/838592a_hb_r_002.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/83/838592/838592a_hb_ro_055.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/83/838592/838592a_hb_ro_014.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/83/838592/838592a_hb_ro_017.jpg',
          },
        ],
      },
    },
  });
  await prisma.hotel.create({
    data: {
      name: '4R Gran Europe',
      country: 'Spain',
      city: 'El Vendrell',
      currency: 'EUR',
      region: 'Catalonia',
      adults: 2,
      price_per_person: 60.69,
      star_rating: 4,
      images: {
        create: [
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/003787/003787a_hb_r_001.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/003787/003787a_hb_r_002.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/003787/003787a_hb_ro_070.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/003787/003787a_hb_r_005.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/003787/003787a_hb_f_001.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/003787/003787a_hb_r_006.jpg',
          },
          {
            url: 'https://i.travelapi.com/hotels/1000000/540000/536700/536604/6e474bce_b.jpg',
            source: 'GoquoPackageSearch',
          },
        ],
      },
    },
  });
  console.log('Hotel Spain created');

  await prisma.hotel.create({
    data: {
      name: 'Sao Felix Hotel Hillside and Nature',
      country: 'Portugal',
      city: 'Póvoa De Varzim',
      currency: 'EUR',
      region: 'Porto',
      adults: 2,
      price_per_person: 79,
      star_rating: 4,
      images: {
        create: [
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/004316/004316a_hb_a_033.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/004316/004316a_hb_a_035.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/004316/004316a_hb_r_009.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/004316/004316a_hb_f_002.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/004316/004316a_hb_r_005.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/004316/004316a_hb_f_001.jpg',
          },
          {
            url: 'https://i.travelapi.com/hotels/2000000/1410000/1404100/1404007/c8a41cdc_b.jpg',
            source: 'GoquoPackageSearch',
          },
        ],
      },
    },
  });
  await prisma.hotel.create({
    data: {
      name: 'Hotel Estoril Eden',
      country: 'Lisbon',
      city: 'Cascais',
      currency: 'EUR',
      region: 'Autonomous Community Of The Basque Country',
      adults: 2,
      price_per_person: 175.02,
      star_rating: 4,
      images: {
        create: [
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/000848/000848a_hb_ro_038.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/000848/000848a_hb_ro_043.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/000848/000848a_hb_r_002.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/000848/000848a_hb_ro_037.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/000848/000848a_hb_ro_053.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/000848/000848a_hb_ro_054.jpg',
          },
          {
            url: 'https://i.travelapi.com/hotels/1000000/850000/846100/846054/5f435521_b.jpg',
          },
        ],
      },
    },
  });
  await prisma.hotel.create({
    data: {
      name: 'Hotel D Alcoutim',
      country: 'Portugal',
      city: 'Alcoutim',
      currency: 'EUR',
      region: 'Faro',
      adults: 2,
      price_per_person: 47.21,
      star_rating: 3,
      images: {
        create: [
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/006977/006977a_hb_r_004.JPG',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/006977/006977a_hb_ro_014.JPG',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/006977/006977a_hb_r_005.JPG',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/006977/006977a_hb_f_001.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/006977/006977a_hb_r_006.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/006977/006977a_hb_r_007.jpg',
          },
          {
            url: 'https://i.travelapi.com/hotels/12000000/11970000/11963100/11963078/6008c274_b.jpg',
          },
        ],
      },
    },
  });
  await prisma.hotel.create({
    data: {
      name: 'Quinta Da Casa Branca',
      country: 'Portugal',
      city: 'Funchal',
      currency: 'EUR',
      region: 'Madeira',
      adults: 2,
      price_per_person: 204.36,
      star_rating: 5,
      images: {
        create: [
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/002907/002907a_hb_l_015.JPG',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/002907/002907a_hb_ro_005.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/002907/002907a_hb_ro_013.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/002907/002907a_hb_ro_006.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/002907/002907a_hb_ro_003.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/002907/002907a_hb_f_004.jpg',
          },
          {
            url: 'https://i.travelapi.com/hotels/1000000/900000/895200/895119/4ac65438_b.jpg',
          },
        ],
      },
    },
  });
  await prisma.hotel.create({
    data: {
      name: 'Hotel Quintinha São João & Spa',
      country: 'Portugal',
      city: 'Funchal',
      currency: 'EUR',
      region: 'Madeira',
      adults: 2,
      price_per_person: 269.57,
      star_rating: 5,
      images: {
        create: [
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/000800/000800a_hb_f_030.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/000800/000800a_hb_ba_023.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/000800/000800a_hb_ba_022.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/000800/000800a_hb_f_008.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/000800/000800a_hb_f_033.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/000800/000800a_hb_ba_024.jpg',
          },
          {
            url: 'https://i.travelapi.com/hotels/2000000/1590000/1589300/1589294/20ced138_b.jpg',
          },
        ],
      },
    },
  });
  await prisma.hotel.create({
    data: {
      name: 'Senhora da Guia Cascais Boutique Hotel',
      country: 'Portugal',
      city: 'Cascais',
      currency: 'EUR',
      region: 'Lisbon',
      adults: 2,
      price_per_person: 210.76,
      star_rating: 5,
      images: {
        create: [
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/008209/008209a_hb_r_001.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/008209/008209a_hb_r_002.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/008209/008209a_hb_r_003.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/008209/008209a_hb_a_010.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/008209/008209a_hb_a_054.jpg',
          },
          {
            url: 'https://static.hdpp-tui.com/ehb/giata/bigger/00/008209/008209a_hb_a_011.jpg',
          },
          {
            url: 'https://i.travelapi.com/hotels/2000000/1190000/1186600/1186522/2cd50b1c_b.jpg',
          },
        ],
      },
    },
  });
  console.log('Hotel Portugal created');
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
