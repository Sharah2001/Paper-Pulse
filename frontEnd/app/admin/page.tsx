import { JSX } from "react";

export default function AdminDashboard(): JSX.Element {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

            <div className="grid md:grid-cols-3 gap-6">
                <StatCard title="Members" value="124" />
                <StatCard title="Events" value="6" />
                <StatCard title="Payments" value="Rs. 320,000" />
            </div>
        </div>
    );
}

function StatCard({ title, value }: { title: string; value: string }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-slate-500">{title}</p>
            <h3 className="text-2xl font-bold mt-2">{value}</h3>
        </div>
    );
}
