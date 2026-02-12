import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';

@Injectable()
export class PaymentsService {
    private stripe: Stripe;
    constructor() {
        this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
            apiVersion: '2025-01-27.acacia' as any,
        });
    }

    async createCheckoutSession(eventId: string) {
        // Normally you'd fetch event from DB
        const event = {
            title: 'Book Club Meetup',
            price: 500,
        };

        const session = await this.stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [
                {
                    price_data: {
                        currency: 'lkr',
                        product_data: {
                            name: event.title,
                        },
                        unit_amount: event.price * 100,
                    },
                    quantity: 1,
                },
            ],
            success_url: 'http://localhost:3000/payment/success',
            cancel_url: 'http://localhost:3000/payment/cancel',
        });

        return { url: session.url };
    }
}
