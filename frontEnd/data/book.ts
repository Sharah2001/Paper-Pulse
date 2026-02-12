

export interface Book {
  _id: string;
  title: string;
  author: string;
  price: number;
  category: string;
  image: string;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
}

export const book: Book[] = [
  {
    _id: "1",
    title: "Manthai maantharkal",
    author: "Latha",
    price: 1500.00,
    category: "Fiction",
    image: "/images/books/book01.jpg",
    isNewArrival: true,
  },
  {
    _id: "2",
    title: "ikigai",
    author: "Hector Garcia & Francesc Miralles",
    price: 2700.00,
    category: "Self-Help",
    image: "/images/books/book03.jpg",
    isBestSeller: true,
  },
  {
    _id: "3",
    title: "ichcha",
    author: "Shoba Shakthy",
    price: 3200.00,
    category: "Novel",
    image: "/images/books/book04.jpg",
    isBestSeller: true,
  },
  {
    _id: "4",
    title: "Vennira Iravukal",
    author: "Fyodor Dostoevsky",
    price: 2300.00,
    category: "Novel",
    image: "/images/books/book02.jpg",
    isNewArrival: true,

  },


// Non-Fiction//
  {
    _id: "5",
    title: "The Psychology of Money ",
    author: "Morgan Housel",
    price: 3800.00,
    category: "Self-Help",
    image: "/images/books/book05.jpg",
    isNewArrival: false,
    isBestSeller:false,
  },


  {
    _id: "6",
    title: "Desanthiri",
    author: "S. Ramakrishnan",
    price: 1200.00,
    category: "Non-Fiction",
    image: "/images/books/book06.jpg",
    isNewArrival: false,
    isBestSeller:false,
  },



  {
    _id: "7",
    title: "Sila nerangalil Sila manitharkal",
    author: "Jeyakanthan",
    price: 2300.00,
    category: "Novel",
    image: "/images/books/book07.jpg",
    isNewArrival: false,
    isBestSeller:false,
  },

  {
    _id: "8",
    title: "sri ranagthu devathaikal",
    author: "Sujatha",
    price: 2300.00,
    category: "Novel",
    image: "/images/books/book08.jpg",
    isNewArrival: false,
    isBestSeller:false,
  },


  {
    _id: "9",
    title: "Kalli kaadu ithigaasam",
    author: "Vairamuthu",
    price: 2300.00,
    category: "Non-Fiction",
    image: "/images/books/book09.jpg",
    isNewArrival: false,
    isBestSeller:false,
  },
  

  {
    _id: "10",
    title: "Ezhu thalaimuraikal",
    author: "Fyodor Dostoevsky",
    price: 2300.00,
    category: "Non-Fiction",
    image: "/images/books/book10.jpg",
    isNewArrival: false,
    isBestSeller:false,
  },


  //fiction//
  {
    _id: "11",
    title: "Gorilla",
    author: "Shoba Sakthy",
    price: 2300.00,
    category: "Fiction",
    image: "/images/books/book11.jpg",
    isNewArrival: false,
    isBestSeller:false,
  },



  {
    _id: "12",
    title: "Salaam Alaik",
    author: "Shoba Sakthy",
    price: 2300.00,
    category: "Fiction",
    image: "/images/books/book12.jpg",
    isNewArrival: false,
    isBestSeller:false,
  },



{
    _id: "13",
    title: "The Seven Moons of Maali Almeida",
    author: "	Shehan Karunatilaka",
    price: 2300.00,
    category: "Novel",
    image: "/images/books/book13.jpg",
    isNewArrival: false,
    isBestSeller:false,
  },


  {
    _id: "14",
    title: "Piralayam",
    author: "Jeyakanthan",
    price: 2300.00,
    category: "Novel",
    image: "/images/books/book14.jpg",
    isNewArrival: false,
    isBestSeller:false,
  },



  //self help//

  {
    _id: "15",
    title: "Who Will Cry When You Die?",
    author: " Robin Sharma",
    price: 2300.00,
    category: "Self-Help",
    image: "/images/books/book15.jpg",
    isNewArrival: false,
    isBestSeller:false,
  },



  {
    _id: "16",
    title: "Thanmeetchi",
    author: "Jeyamohan",
    price: 2300.00,
    category: "Self-Help",
    image: "/images/books/book16.jpg",
    isNewArrival: false,
    isBestSeller:false,
  },


  {
    _id: "17",
    title: "Moonrezhuthu",
    author: "Pa Raghavan",
    price: 2300.00,
    category: "Self-Help",
    image: "/images/books/book17.jpg",
    isNewArrival: false,
    isBestSeller:false,
  },


  {
    _id: "18",
    title: "Chanakya in You",
    author: " Radhakrishnan Pillai",
    price: 2300.00,
    category: "Self-Help",
    image: "/images/books/book18.jpg",
    isNewArrival: false,
    isBestSeller:false,
  },


  {
    _id: "19",
    title: "Discover Your Destiny",
    author: " Robin Sharma",
    price: 2300.00,
    category: "Self-Help",
    image: "/images/books/book19.jpg",
    isNewArrival: false,
    isBestSeller:false,
  },

  //biography//

  {
    _id: "20",
    title: "Steve Jobs",
    author: "Walter Isaacson",
    price: 2300.00,
    category: "Biography",
    image: "/images/books/book20.jpg",
    isNewArrival: false,
    isBestSeller:false,
  },

  {
    _id: "21",
    title: "Einstein: His Life and Universe ",
    author: "Walter Isaacson",
    price: 2300.00,
    category: "Biography",
    image: "/images/books/book21.jpg",
    isNewArrival: false,
    isBestSeller:false,
  },

  {
    _id: "22",
    title: "Che Guevara",
    author: "Jon Lee Anderson",
    price: 2300.00,
    category: "Biography",
    image: "/images/books/book22.jpg",
    isNewArrival: false,
    isBestSeller:false,
  },

  {
    _id: "23",
    title: "Karl Marx: A Biography",
    author: "David McLellan",
    price: 2300.00,
    category: "Biography",
    image: "/images/books/book23.jpg",
    isNewArrival: false,
    isBestSeller:false,
  },


  {
    _id: "24",
    title: "Elon Musk ",
    author: "Walter Isaacson",
    price: 2300.00,
    category: "Biography",
    image: "/images/books/book24.jpg",
    isNewArrival: false,
    isBestSeller:false,
  },


  {
    _id: "25",
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    price: 2300.00,
    category: "Biography",
    image: "/images/books/book25.jpg",
    isNewArrival: false,
    isBestSeller:false,
  },


  {
    _id: "26",
    title: "Long Walk to Freedom",
    author: "Nelson Mandela",
    price: 2300.00,
    category: "Biography",
    image: "/images/books/book26.jpg",
    isNewArrival: false,
    isBestSeller:false,
  },
]

