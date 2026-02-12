import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AccessoriesService } from './accessories/accessories.service';
import { CreateAccessoryDto } from './accessories/dto/create-accessory.dto';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const accessoriesService = app.get(AccessoriesService);

  await accessoriesService.deleteAll();
  console.log('Cleared existing accessories...');

  const accessories: CreateAccessoryDto[] = [
    {
      name: 'Classic Book Lover Tote Bag',
      category: 'Tote Bag',
      price: 750,
      image: '/images/books/bag05.jpg',
    },
    {
      name: 'Minimal Canvas Tote',
      category: 'Tote Bag',
      price: 680,
      image: '/images/books/bag03.jpg',
    },
    {
      name: 'Minimal Canvas Tote',
      category: 'Tote Bag',
      price: 700,
      image: '/images/books/bag06.jpg',
    },
    {
      name: 'Quote Bookmark',
      category: 'Bookmark',
      price: 350,
      image: '/images/books/bookMark01.jpg',
    },
    {
      name: 'Metal Bookmark',
      category: 'Bookmark',
      price: 550,
      image: '/images/books/bookMark02.jpg',
    },
    {
      name: 'Wooden Bookmark',
      category: 'Bookmark',
      price: 400,
      image: '/images/books/bookMark08.jpg',
    },
    {
      name: 'Silicone Bookmark',
      category: 'Bookmark',
      price: 350,
      image: '/images/books/bookMark10.jpg',
    },
  ];

  for (const accessory of accessories) {
    await accessoriesService.create(accessory);
  }

  console.log('Accessories seeded successfully!');
  await app.close();
}

bootstrap();
