import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth/jwt-auth.guard';

@Controller('payments')
@UseGuards(JwtAuthGuard) // 🔒 user must be logged in
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {}

  @Post('create-checkout-session')
  createCheckout(@Body() body: { eventId: string }) {
    return this.paymentsService.createCheckoutSession(body.eventId);
  }
}
