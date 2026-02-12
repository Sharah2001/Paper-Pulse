"use client";

import React, { useEffect, useState } from "react";
import { Event } from "@/app/types";
import { useRouter } from "next/navigation";
import { api } from "@/utils/api";

export default function Community(): React.JSX.Element {
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    api.getEvents().then(setEvents);
  }, []);

  const joinEvent = (eventId: string) => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/register");
      return;
    }

    try {
      router.push(
        `/payments?eventId=${eventId}`
      );
    } catch (err) {
      setError("Payment failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-sky-50 p-8">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">
        Community Events ☕📖
      </h1>

      {error && (
        <div className="mb-4 p-3 rounded-lg bg-red-100 group-hover:text-indigo-600">
          {error}
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event._id}
            className="bg-white rounded-2xl shadow p-6 flex flex-col"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {event.title}
            </h3>

            <p className="text-gray-600 mt-2 flex-grow">
              {event.description}
            </p>

            <div className="mt-4">
              <p className="font-bold text-indigo-600">
                Rs. {event.price}
              </p>

              <button
                onClick={() => joinEvent(event._id)}
                className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg"
              >
                Join & Pay
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
