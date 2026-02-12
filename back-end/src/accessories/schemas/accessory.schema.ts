import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AccessoryDocument = Accessory & Document;

@Schema()
export class Accessory {
  @Prop({ required: true })
  name!: string;

  @Prop({ required: true })
  category!: 'Tote Bag' | 'Bookmark';

  @Prop({ required: true })
  price!: number;

  @Prop({ required: true })
  image!: string;
}

export const AccessorySchema = SchemaFactory.createForClass(Accessory);
