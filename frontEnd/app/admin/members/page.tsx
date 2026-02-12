"use client";

import { JSX, useEffect, useState } from "react";

interface Member {
    _id: string;
    fullName: string;
    email: string;
}

export default function Members(): JSX.Element {
    const [members, setMembers] = useState<Member[]>([]);

    useEffect(() => {
        fetch("http://localhost:3001/users")
            .then(res => res.json())
            .then(setMembers);
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Community Members</h1>

            <div className="bg-white rounded-xl shadow overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-100">
                        <tr>
                            <th className="p-4">Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map(member => (
                            <tr key={member._id} className="border-t">
                                <td className="p-4">{member.fullName}</td>
                                <td>{member.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
