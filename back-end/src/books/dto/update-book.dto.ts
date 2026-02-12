export class UpdateBookDto {
  readonly title?: string;
  readonly author?: string;
  readonly price?: number;
  readonly stock?: number;
  readonly category?: string;
  readonly image?: string;
  readonly isNewArrival?: boolean;
  readonly isBestSeller?: boolean;
}
