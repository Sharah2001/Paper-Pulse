"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { RegisterForm } from "@/app/types";
import { api } from "@/utils/api";
import { useSearchParams } from "next/navigation";

export default function RegisterPage(): React.ReactElement {
  const router = useRouter();

  const [error, setError] = useState("");
  const [form, setForm] = useState<RegisterForm>({
    fullName: "",
    email: "",
    phone: "",
    occupation: "",
    interestReason: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    setError("");
    try {
      const data = await api.register(form);
      localStorage.setItem("token", data.token);
      router.push(redirect);
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || "Something went wrong during registration");
    }
  };

  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/community";

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-2">Join the Community</h2>

        <p className="text-sm text-gray-500 mb-4">
          Create an account to join the community.
        </p>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm font-medium mb-4 animate-in fade-in slide-in-from-top-2">
            {error}
          </div>
        )}

        <div className="space-y-3">
          <input className="input" name="fullName" placeholder="Full Name" onChange={handleChange} />
          <input className="input" name="email" placeholder="Email" onChange={handleChange} />
          <input className="input" name="phone" placeholder="Phone" onChange={handleChange} />
          <input className="input" name="occupation" placeholder="Occupation" onChange={handleChange} />
          <textarea className="input" name="interestReason" placeholder="Why interested? (optional)" onChange={handleChange} />
          <input className="input" type="password" name="password" placeholder="Password" onChange={handleChange} />
        </div>

        <button
          onClick={submit}
          className="w-full mt-5 bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700"
        >
          Register & Join
        </button>
      </div>
    </div>
  );
}
