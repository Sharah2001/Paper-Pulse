"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { api } from "@/utils/api";

export default function Payments() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const eventId = searchParams.get("eventId");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!eventId) {
            router.push("/community");
        }
    }, [eventId, router]);

    const handlePayment = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            router.push("/register");
            return;
        }

        try {
            setLoading(true);

            const res = await api.payForEvent(eventId!, token);

            router.push(
                `/receipt?event=${res.event.title}&status=${res.status}`
            );
        } catch (err) {
            setError("Payment failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-amber-50">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4">Confirm Payment</h1>

                {error && (
                    <div className="mb-4 p-3 rounded-lg bg-red-100 text-red-700">
                        {error}
                    </div>
                )}

                <p className="text-gray-600 mb-6">
                    You’re about to join this community event.
                </p>

                <button
                    onClick={handlePayment}
                    disabled={loading}
                    className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3 rounded-xl font-semibold disabled:opacity-50"
                >
                    {loading ? "Processing..." : "Pay Now"}
                </button>
            </div>
        </div>
    );
}
