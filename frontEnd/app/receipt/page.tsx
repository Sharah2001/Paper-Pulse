"use client";
import { ReactElement } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Receipt(): ReactElement {
  const searchParams = useSearchParams();
  const event = searchParams.get('event');
  const status = searchParams.get('status');

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50">
      <div className="bg-white p-8 rounded-2xl shadow max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Payment Successful ✅
        </h2>

        <p className="text-gray-700">
          <strong>Event:</strong> {event}
        </p>
        <p className="text-gray-700 mt-2">
          <strong>Status:</strong> {status}
        </p>

        <button
          onClick={() => window.location.href = "/community"}
          className="mt-6 bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-lg"
        >
          Back to Community
        </button>
      </div>
    </div>
  );
}
