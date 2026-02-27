"use client";

import { useEffect, useState,JSX} from "react";

interface Event {
  _id: string;
  title: string;
  price: number;
}

export default function AdminEvents(): JSX.Element {
  const [events, setEvents] = useState<Event[]>([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/events")
      .then(res => res.json())
      .then(setEvents);
  }, []);

  const createEvent = async () => {
    const res = await fetch("http://localhost:3001/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, price: Number(price) }),
    });
    const newEvent = await res.json();
    setEvents([...events, newEvent]);
    setTitle("");
    setPrice("");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Events</h1>

      <div className="bg-white p-6 rounded-xl shadow mb-8 space-y-4 max-w-md">
        <input
          className="input"
          placeholder="Event Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          className="input"
          placeholder="Price"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <button
          onClick={createEvent}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
        >
          Add Event
        </button>
      </div>

      <div className="space-y-4">
        {events.map(event => (
          <div key={event._id} className="bg-white p-4 rounded-lg shadow flex justify-between">
            <span>{event.title}</span>
            <span className="font-semibold">Rs. {event.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
