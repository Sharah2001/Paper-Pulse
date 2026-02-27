import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BooksService } from './books/books.service';
import { CreateBookDto } from './books/dto/create-book.dto';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const booksService = app.get(BooksService);

  await booksService.deleteAll();
  console.log('Cleared existing books...');

  const books: CreateBookDto[] = [
    {
      title: 'Manthai maantharkal',
      author: 'Latha',
      price: 1500.0,
      stock: 10,
      category: 'Fiction',
      image: '/images/books/book01.jpg',
      isNewArrival: true,
    },
    {
      title: 'ikigai',
      author: 'Hector Garcia & Francesc Miralles',
      price: 2700.0,
      stock: 10,
      category: 'Self-Help',
      image: '/images/books/book03.jpg',
      isBestSeller: true,
    },
    {
      title: 'ichcha',
      author: 'Shoba Shakthy',
      price: 3200.0,
      stock: 10,
      category: 'Novel',
      image: '/images/books/book04.jpg',
      isBestSeller: true,
    },
    {
      title: 'Vennira Iravukal',
      author: 'Fyodor Dostoevsky',
      price: 2300.0,
      stock: 10,
      category: 'Novel',
      image: '/images/books/book02.jpg',
      isNewArrival: true,
    },
    // Non-Fiction//
    {
      title: 'The Psychology of Money ',
      author: 'Morgan Housel',
      price: 3800.0,
      stock: 10,
      category: 'Self-Help',
      image: '/images/books/book05.jpg',
      isNewArrival: false,
      isBestSeller: false,
    },

    {
      title: 'Desanthiri',
      author: 'S. Ramakrishnan',
      price: 1200.0,
      stock: 10,
      category: 'Non-Fiction',
      image: '/images/books/book06.jpg',
      isNewArrival: false,
      isBestSeller: false,
    },

    {
      title: 'Sila nerangalil Sila manitharkal',
      author: 'Jeyakanthan',
      price: 2700.0,
      stock: 10,
      category: 'Novel',
      image: '/images/books/book07.jpg',
      isNewArrival: false,
      isBestSeller: false,
    },

    {
      title: 'sri ranagthu devathaikal',
      author: 'Sujatha',
      price: 1000.0,
      stock: 10,
      category: 'Novel',
      image: '/images/books/book08.jpg',
      isNewArrival: false,
      isBestSeller: false,
    },

    {
      title: 'Kalli kaadu ithigaasam',
      author: 'Vairamuthu',
      price: 2850.0,
      stock: 10,
      category: 'Non-Fiction',
      image: '/images/books/book09.jpg',
      isNewArrival: false,
      isBestSeller: false,
    },

    {
      title: 'Ezhu thalaimuraikal',
      author: 'Fyodor Dostoevsky',
      price: 1830.0,
      stock: 10,
      category: 'Non-Fiction',
      image: '/images/books/book10.jpg',
      isNewArrival: false,
      isBestSeller: false,
    },

    //fiction//
    {
      title: 'Gorilla',
      author: 'Shoba Sakthy',
      price: 1650.0,
      stock: 10,
      category: 'Fiction',
      image: '/images/books/book11.jpg',
      isNewArrival: false,
      isBestSeller: false,
    },

    {
      title: 'Salaam Alaik',
      author: 'Shoba Sakthy',
      price: 1750.0,
      stock: 10,
      category: 'Fiction',
      image: '/images/books/book12.jpg',
      isNewArrival: false,
      isBestSeller: false,
    },

    {
      title: 'The Seven Moons of Maali Almeida',
      author: '	Shehan Karunatilaka',
      price: 3600.0,
      stock: 10,
      category: 'Novel',
      image: '/images/books/book13.jpg',
      isNewArrival: false,
      isBestSeller: false,
    },

    {
      title: 'Piralayam',
      author: 'Jeyakanthan',
      price: 1200.0,
      stock: 10,
      category: 'Novel',
      image: '/images/books/book14.jpg',
      isNewArrival: false,
      isBestSeller: false,
    },
    //self help//

    {
      title: 'Who Will Cry When You Die?',
      author: ' Robin Sharma',
      price: 2970.0,
      stock: 10,
      category: 'Self-Help',
      image: '/images/books/book15.jpg',
      isNewArrival: false,
      isBestSeller: false,
    },

    {
      title: 'Thanmeetchi',
      author: 'Jeyamohan',
      price: 1270.0,
      stock: 10,
      category: 'Self-Help',
      image: '/images/books/book16.jpg',
      isNewArrival: false,
      isBestSeller: false,
    },

    {
      title: 'Moonrezhuthu',
      author: 'Pa Raghavan',
      price: 1150.0,
      stock: 10,
      category: 'Self-Help',
      image: '/images/books/book17.jpg',
      isNewArrival: false,
      isBestSeller: false,
    },

    {
      title: 'Chanakya in You',
      author: ' Radhakrishnan Pillai',
      price: 2630.0,
      stock: 10,
      category: 'Self-Help',
      image: '/images/books/book18.jpg',
      isNewArrival: false,
      isBestSeller: false,
    },

    {
      title: 'Discover Your Destiny',
      author: ' Robin Sharma',
      price: 3205.0,
      stock: 10,
      category: 'Self-Help',
      image: '/images/books/book19.jpg',
      isNewArrival: false,
      isBestSeller: false,
    },
    //biography//

    {
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      price: 2400.0,
      stock: 10,
      category: 'Biography',
      image: '/images/books/book20.jpg',
      isNewArrival: false,
      isBestSeller: false,
    },

    {
      title: 'Einstein: His Life and Universe ',
      author: 'Walter Isaacson',
      price: 2800.0,
      stock: 10,
      category: 'Biography',
      image: '/images/books/book21.jpg',
      isNewArrival: false,
      isBestSeller: false,
    },

    {
      title: 'Che Guevara',
      author: 'Jon Lee Anderson',
      price: 3500.0,
      stock: 10,
      category: 'Biography',
      image: '/images/books/book22.jpg',
      isNewArrival: false,
      isBestSeller: false,
    },

    {
      title: 'Karl Marx: A Biography',
      author: 'David McLellan',
      price: 3560.0,
      stock: 10,
      category: 'Biography',
      image: '/images/books/book23.jpg',
      isNewArrival: false,
      isBestSeller: false,
    },

    {
      title: 'Elon Musk ',
      author: 'Walter Isaacson',
      price: 2690.0,
      stock: 10,
      category: 'Biography',
      image: '/images/books/book24.jpg',
      isNewArrival: false,
      isBestSeller: false,
    },

    {
      title: 'The Diary of a Young Girl',
      author: 'Anne Frank',
      price: 2540.0,
      stock: 10,
      category: 'Biography',
      image: '/images/books/book25.jpg',
      isNewArrival: false,
      isBestSeller: false,
    },

    {
      title: 'Long Walk to Freedom',
      author: 'Nelson Mandela',
      price: 2700.0,
      stock: 10,
      category: 'Biography',
      image: '/images/books/book26.jpg',
      isNewArrival: false,
      isBestSeller: false,
    },
  ];

  for (const book of books) {
    await booksService.create(book);
  }

  console.log('Books seeded successfully!');
  await app.close();
}

bootstrap().catch((err) => {
  console.error('Error seeding books:', err);
});
