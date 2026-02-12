export class CreateAccessoryDto {
  name!: string;
  category!: string;
  price!: number;
  stock?: number;
  image!: string;
}
