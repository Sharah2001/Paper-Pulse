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
      const res = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error('Invalid credentials');

      const data = await res.json();
      localStorage.setItem('token', data.access_token);

      
      const payload:JwtPayload= jwtDecode(data.access_token);
      
      if (payload.role === 'admin') router.push('/dashboard/admin');
      else router.push('/dashboard/user');

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="border p-8 rounded space-y-4 w-80"
      >
        <h1 className="text-xl font-bold">Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2 w-full rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border p-2 w-full rounded"
        />

        <button disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          {loading ? 'Logging in...' : 'Login'}
        </button>

        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}
