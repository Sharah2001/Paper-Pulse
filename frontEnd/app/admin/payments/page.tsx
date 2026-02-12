"use client";

import { JSX, useEffect, useState } from "react";

interface Payment {
    _id: string;
    amount: number;
    status: string;
}

export default function AdminPayments(): JSX.Element {
    const [payments, setPayments] = useState<Payment[]>([]);

    useEffect(() => {
        fetch("http://localhost:3001/payments")
            .then(res => res.json())
            .then(setPayments);
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Payments</h1>

            <div className="grid gap-4">
                {payments.map(payment => (
                    <div key={payment._id} className="bg-white p-4 rounded-xl shadow">
                        <p>Status: <strong>{payment.status}</strong></p>
                        <p>Amount: Rs. {payment.amount}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
