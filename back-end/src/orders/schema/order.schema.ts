import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Order {
  @Prop() userId!: string;
  @Prop({ type: Array }) books!: any[];
  @Prop() totalPrice!: number;
  @Prop() paymentMethod!: string;
  @Prop({ default: 'Pending' }) status!: string;
  @Prop({ type: Object }) payment?: any;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
