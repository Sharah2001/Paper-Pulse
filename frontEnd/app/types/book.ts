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
