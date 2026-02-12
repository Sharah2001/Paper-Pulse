"use client";

import Link from "next/link";
import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen flex bg-slate-100">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-white p-6">
                <h2 className="text-xl font-bold mb-8">Admin Panel</h2>

                <nav className="space-y-4">
                    <Link href="/admin" className="block hover:text-indigo-400">
                        Dashboard
                    </Link>
                    <Link href="/admin/events" className="block hover:text-indigo-400">
                        Events
                    </Link>
                    <Link href="/admin/members" className="block hover:text-indigo-400">
                        Members
                    </Link>
                    <Link href="/admin/payments" className="block hover:text-indigo-400">
                        Payments
                    </Link>
                </nav>
            </aside>

            {/* Content */}
            <main className="flex-1 p-8">{children}</main>
        </div>
    );
}
