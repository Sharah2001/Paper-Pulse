import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Book extends Document {
  @Prop({ required: true })
  title!: string;

  @Prop({ required: true })
  author!: string;

  @Prop({ required: true })
  price!: number;

  @Prop({ default: 0 })
  stock!: number;

  @Prop({ required: true })
  category!: string;

  @Prop()
  image!: string;

  @Prop({ default: false })
  isNewArrival!: boolean;

  @Prop({ default: false })
  isBestSeller!: boolean;

  @Prop({ default: 'COD' })
  paymentMethod!: string;

  @Prop({ default: 'Pending' })
  status!: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
