import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Order {
  @Prop() userId!: string;
  @Prop({ type: Array }) books!: any[];
  @Prop() totalPrice!: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
