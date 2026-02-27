"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Save user info locally
    localStorage.setItem("user", JSON.stringify(form));

    router.push(redirect);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6">Your Details</h1>

        <input
          placeholder="Full Name"
          required
          className="input"
          value={form.fullName}
          onChange={(e) =>
            setForm({ ...form, fullName: e.target.value })
          }
        />

        <input
          placeholder="Email"
          type="email"
          required
          className="input mt-4"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          placeholder="Phone Number"
          required
          className="input mt-4"
          value={form.phone}
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <button className="btn-primary w-full mt-6">
          Continue
        </button>
      </form>
    </div>
  );
}