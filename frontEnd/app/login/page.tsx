'use client';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


interface JwtPayload {
  sub: string;
  email: string;
  role: 'user' | 'admin';
}
export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');


    try {
      const res = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log('Login response:', res.status, data);

      if (!res.ok) throw new Error(data?.message || 'Invalid credentials');

      if (!data?.access_token) throw new Error('No access token received');

      localStorage.setItem('token', data.access_token);

      const payload: JwtPayload = jwtDecode(data.access_token);

      if (payload.role === 'admin') router.push('/dashboard/admin');
      else router.push('/dashboard/user');
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full premium-card p-10 space-y-8 bg-white/50 backdrop-blur-xl border border-white/20">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
            <span className="text-2xl font-bold">P</span>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-slate-900 tracking-tight">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Log in to your account to continue
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 ml-1 mb-1.5">
                Email address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 ml-1 mb-1.5">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm font-medium flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
              <span className="w-1 h-1 bg-red-600 rounded-full" />
              {error}
            </div>
          )}

          <button
            disabled={loading}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Verifying..." : "Sign in"}
          </button>

          <p className="text-center text-sm text-slate-500 mt-4">
            Don't have an account?{" "}
            <span
              onClick={() => router.push('/signup')}
              className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors cursor-pointer"
            >Sign up</span>
          </p>
        </form>

      </div>
    </div>
  );
}
