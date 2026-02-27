import { Controller, Post, Req, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly orderService: OrdersService) { }
  @Post('cod')
  createCODOrder(
    @Req() req: any,
    @Body()
    body: { items: { bookId: string; price: number; quantity: number }[]; shipping: number },
  ) {
    const userId = req.user?.id || req.user?._id;
    return this.orderService.createCODOrder(userId, body.items, body.shipping);
  }
}
