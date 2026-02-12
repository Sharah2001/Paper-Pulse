import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  readonly title!: string;

  @IsString()
  @IsNotEmpty()
  readonly author!: string;

  @IsNumber()
  readonly stock!: number;

  @IsNumber()
  readonly price!: number;

  @IsString()
  @IsNotEmpty()
  category!: string;

  @IsString()
  @IsOptional()
  readonly image?: string;

  @IsBoolean()
  @IsOptional()
  readonly isNewArrival?: boolean;

  @IsBoolean()
  @IsOptional()
  readonly isBestSeller?: boolean;
}
