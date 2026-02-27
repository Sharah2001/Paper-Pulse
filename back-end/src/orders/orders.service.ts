import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './schema/order.schema';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private readonly orderModel: Model<Order>,
  ) {}
  async createCODOrder(
    userId: string,
    items: { bookId: string; price: number; quantity: number }[],
    shipping: number,
  ) {
    const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

    return this.orderModel.create({
      userId,
      books: items,
      totalPrice: subtotal + shipping,
      paymentMethod: 'COD',
      status: 'Pending',
    });
  }
}
