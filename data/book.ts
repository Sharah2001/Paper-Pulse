

export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  category: string;
  image: string;
  description: string;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
}

export const book: Book[] = [
  {
    id: 1,
    title: "Manthai maantharkal",
    author: "Latha",
    price: 1500.00,
    category: "fiction",
    image: "/images/books/book01.jpg",
    description: "A classic novel of the Jazz Age.",
    isNewArrival: true,
  },
  {
    id: 2,
    title: "ikigai",
    author: "Hector Garcia & Francesc Miralles",
    price: 2700.00,
    category: "Self-help",
    image: "/images/books/book03.jpg",
    description: "Tiny changes, remarkable results.",
    isBestSeller: true,
  },
  {
    id: 3,
    title: "ichcha",
    author: "Shoba Shakthy",
    price: 3200.00,
    category: "Novel",
    image: "/images/books/book04.jpg",
    description: "Tiny changes, remarkable results.",
    isBestSeller: true,
  },
  {
    id: 4,
    title: "Vennira Iravukal",
    author: "Fyodor Dostoevsky",
    price: 2300.00,
    category: "Novel",
    image: "/images/books/book02.jpg",
    description: "A classic novel of the Jazz Age.",
    isNewArrival: true,

  },


// Non-Fiction//
  {
    id: 5,
    title: "The Psychology of Money ",
    author: "Morgan Housel",
    price: 3800.00,
    category: "self-help",
    image: "/images/books/book02.jpg",
    description: "A classic novel of the Jazz Age.",
    isNewArrival: false,
    isBestSeller:false,
  },


  {
    id: 6,
    title: "Desanthiri",
    author: "S. Ramakrishnan",
    price: 1200.00,
    category: "Non-Fiction",
    image: "/images/books/book02.jpg",
    description: "A classic novel of the Jazz Age.",
    isNewArrival: false,
    isBestSeller:false,
  },



  {
    id: 7,
    title: "Sila nerangalil Sila manitharkal",
    author: "Jeyakanthan",
    price: 2300.00,
    category: "Novel",
    image: "/images/books/book02.jpg",
    description: "A classic novel of the Jazz Age.",
    isNewArrival: false,
    isBestSeller:false,
  },

  {
    id: 8,
    title: "sri ranagthu devathaikal",
    author: "Sujatha",
    price: 2300.00,
    category: "Novel",
    image: "/images/books/book02.jpg",
    description: "A classic novel of the Jazz Age.",
    isNewArrival: false,
    isBestSeller:false,
  },


  {
    id: 9,
    title: "Kalli kaadu ithigaasam",
    author: "Vairamuthu",
    price: 2300.00,
    category: "Non-Fiction",
    image: "/images/books/book02.jpg",
    description: "A classic novel of the Jazz Age.",
    isNewArrival: false,
    isBestSeller:false,
  },
  

  {
    id: 10,
    title: "Ezhu thalaimuraikal",
    author: "Fyodor Dostoevsky",
    price: 2300.00,
    category: "Non-Fiction",
    image: "/images/books/book02.jpg",
    description: "A classic novel of the Jazz Age.",
    isNewArrival: false,
    isBestSeller:false,
  },


  //fiction//
  {
    id: 11,
    title: "Gorilla",
    author: "Shoba Sakthy",
    price: 2300.00,
    category: "Fiction",
    image: "/images/books/book02.jpg",
    description: "A classic novel of the Jazz Age.",
    isNewArrival: false,
    isBestSeller:false,
  },



  {
    id: 12,
    title: "Salaam Alaik",
    author: "Shoba Sakthy",
    price: 2300.00,
    category: "fiction",
    image: "/images/books/book02.jpg",
    description: "A classic novel of the Jazz Age.",
    isNewArrival: false,
    isBestSeller:false,
  },



{
    id: 13,
    title: "The Seven Moons of Maali Almeida",
    author: "	Shehan Karunatilaka",
    price: 2300.00,
    category: "Novel",
    image: "/images/books/book02.jpg",
    description: "A classic novel of the Jazz Age.",
    isNewArrival: false,
    isBestSeller:false,
  },


  {
    id: 14,
    title: "Piralayam",
    author: "Jeyakanthan",
    price: 2300.00,
    category: "Novel",
    image: "/images/books/book02.jpg",
    description: "A classic novel of the Jazz Age.",
    isNewArrival: false,
    isBestSeller:false,
  },



  //self help//

  {
    id: 15,
    title: "Who Will Cry When You Die?",
    author: " Robin Sharma",
    price: 2300.00,
    category: "Self-help",
    image: "/images/books/book02.jpg",
    description: "A classic novel of the Jazz Age.",
    isNewArrival: false,
    isBestSeller:false,
  },



  {
    id: 16,
    title: "Thanmeetchi",
    author: "Jeyamohan",
    price: 2300.00,
    category: "Self-help",
    image: "/images/books/book02.jpg",
    description: "A classic novel of the Jazz Age.",
    isNewArrival: false,
    isBestSeller:false,
  },


  {
    id: 17,
    title: "Moonrezhuthu",
    author: "Pa Raghavan",
    price: 2300.00,
    category: "Self-help",
    image: "/images/books/book02.jpg",
    description: "A classic novel of the Jazz Age.",
    isNewArrival: false,
    isBestSeller:false,
  },


  {
    id: 18,
    title: "Chanakya in You",
    author: " Radhakrishnan Pillai",
    price: 2300.00,
    category: "Self-help",
    image: "/images/books/book02.jpg",
    description: "A classic novel of the Jazz Age.",
    isNewArrival: false,
    isBestSeller:false,
  },


  {
    id: 19,
    title: "Discover Your Destiny",
    author: " Robin Sharma",
    price: 2300.00,
    category: "Self-help",
    image: "/images/books/book02.jpg",
    description: "A classic novel of the Jazz Age.",
    isNewArrival: false,
    isBestSeller:false,
  },

  //biography//

  {
    id: 20,
    title: "Steve Jobs",
    author: "Walter Isaacson",
    price: 2300.00,
    category: "Biography",
    image: "/images/books/book02.jpg",
    description: "A classic novel of the Jazz Age.",
    isNewArrival: false,
    isBestSeller:false,
  },

  {
    id: 21,
    title: "Einstein: His Life and Universe ",
    author: "Walter Isaacson",
    price: 2300.00,
    category: "Biography",
    image: "/images/books/book02.jpg",
    description: "A classic novel of the Jazz Age.",
    isNewArrival: false,
    isBestSeller:false,
  },

  {
    id: 22,
    title: "Che Guevara",
    author: "Jon Lee Anderson",
    price: 2300.00,
    category: "Biography",
    image: "/images/books/book02.jpg",
    description: "A classic novel of the Jazz Age.",
    isNewArrival: false,
    isBestSeller:false,
  },

  {
    id: 23,
    title: "Karl Marx: A Biography ",
    author: "David McLellan",
    price: 2300.00,
    category: "Biography",
    image: "/images/books/book02.jpg",
    description: "A classic novel of the Jazz Age.",
    isNewArrival: false,
    isBestSeller:false,
  },


  {
    id: 24,
    title: "Elon Musk ",
    author: "Walter Isaacson",
    price: 2300.00,
    category: "Biography",
    image: "/images/books/book02.jpg",
    description: "A classic novel of the Jazz Age.",
    isNewArrival: false,
    isBestSeller:false,
  },


  {
    id: 25,
    title: "The Diary of a Young Girl ",
    author: "Anne Frank",
    price: 2300.00,
    category: "Biography",
    image: "/images/books/book02.jpg",
    description: "A classic novel of the Jazz Age.",
    isNewArrival: false,
    isBestSeller:false,
  },


  {
    id: 26,
    title: "Long Walk to Freedom ",
    author: "Nelson Mandela",
    price: 2300.00,
    category: "Biography",
    image: "/images/books/book02.jpg",
    description: "A classic novel of the Jazz Age.",
    isNewArrival: false,
    isBestSeller:false,
  },
]

//   //Journals///


//   {
//     id: 4,
//     title: "Vennira Iravukal",
//     author: "Fyodor Dostoevsky",
//     price: 2300.00,
//     category: "Fiction",
//     image: "/images/books/book02.jpg",
//     description: "A classic novel of the Jazz Age.",
//     isNewArrival: true,
//   },


//   {
//     id: 4,
//     title: "Vennira Iravukal",
//     author: "Fyodor Dostoevsky",
//     price: 2300.00,
//     category: "Fiction",
//     image: "/images/books/book02.jpg",
//     description: "A classic novel of the Jazz Age.",
//     isNewArrival: true,
//   },



//   {
//     id: 4,
//     title: "Vennira Iravukal",
//     author: "Fyodor Dostoevsky",
//     price: 2300.00,
//     category: "Fiction",
//     image: "/images/books/book02.jpg",
//     description: "A classic novel of the Jazz Age.",
//     isNewArrival: true,
//   },


//   {
//     id: 4,
//     title: "Vennira Iravukal",
//     author: "Fyodor Dostoevsky",
//     price: 2300.00,
//     category: "Fiction",
//     image: "/images/books/book02.jpg",
//     description: "A classic novel of the Jazz Age.",
//     isNewArrival: true,
//   },


//   {
//     id: 4,
//     title: "Vennira Iravukal",
//     author: "Fyodor Dostoevsky",
//     price: 2300.00,
//     category: "Fiction",
//     image: "/images/books/book02.jpg",
//     description: "A classic novel of the Jazz Age.",
//     isNewArrival: true,
//   },


//   {
//     id: 4,
//     title: "Vennira Iravukal",
//     author: "Fyodor Dostoevsky",
//     price: 2300.00,
//     category: "Fiction",
//     image: "/images/books/book02.jpg",
//     description: "A classic novel of the Jazz Age.",
//     isNewArrival: true,
//   },



//   {
//     id: 4,
//     title: "Vennira Iravukal",
//     author: "Fyodor Dostoevsky",
//     price: 2300.00,
//     category: "Fiction",
//     image: "/images/books/book02.jpg",
//     description: "A classic novel of the Jazz Age.",
//     isNewArrival: true,
//   },


//   {
//     id: 4,
//     title: "Vennira Iravukal",
//     author: "Fyodor Dostoevsky",
//     price: 2300.00,
//     category: "Fiction",
//     image: "/images/books/book02.jpg",
//     description: "A classic novel of the Jazz Age.",
//     isNewArrival: true,
//   },




//   {
//     id: 4,
//     title: "Vennira Iravukal",
//     author: "Fyodor Dostoevsky",
//     price: 2300.00,
//     category: "Fiction",
//     image: "/images/books/book02.jpg",
//     description: "A classic novel of the Jazz Age.",
//     isNewArrival: true,
//   },


//   {
//     id: 4,
//     title: "Vennira Iravukal",
//     author: "Fyodor Dostoevsky",
//     price: 2300.00,
//     category: "Fiction",
//     image: "/images/books/book02.jpg",
//     description: "A classic novel of the Jazz Age.",
//     isNewArrival: true,
//   },


//   {
//     id: 4,
//     title: "Vennira Iravukal",
//     author: "Fyodor Dostoevsky",
//     price: 2300.00,
//     category: "Fiction",
//     image: "/images/books/book02.jpg",
//     description: "A classic novel of the Jazz Age.",
//     isNewArrival: true,
//   },

//   {
//     id: 4,
//     title: "Vennira Iravukal",
//     author: "Fyodor Dostoevsky",
//     price: 2300.00,
//     category: "Fiction",
//     image: "/images/books/book02.jpg",
//     description: "A classic novel of the Jazz Age.",
//     isNewArrival: true,
//   },

//   {
//     id: 4,
//     title: "Vennira Iravukal",
//     author: "Fyodor Dostoevsky",
//     price: 2300.00,
//     category: "Fiction",
//     image: "/images/books/book02.jpg",
//     description: "A classic novel of the Jazz Age.",
//     isNewArrival: true,
//   },


//   {
//     id: 4,
//     title: "Vennira Iravukal",
//     author: "Fyodor Dostoevsky",
//     price: 2300.00,
//     category: "Fiction",
//     image: "/images/books/book02.jpg",
//     description: "A classic novel of the Jazz Age.",
//     isNewArrival: true,
//   },


// ];
