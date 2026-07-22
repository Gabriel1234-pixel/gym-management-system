"use client";

import { useEffect, useState } from "react";

export default function MembersPage() {
  const [members, setMembers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadMembers = async () => {
      try {
        const res = await fetch("/api2/members");
        if (!res.ok) {
          throw new Error("Failed to fetch members");
        }

        const data = await res.json();
        setMembers(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(error);
        setMembers([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadMembers();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Members</h1>

      {isLoading ? (
        <p className="text-gray-600">Loading members...</p>
      ) : members.length === 0 ? (
        <p className="text-gray-600">No members found.</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-left">ID</th>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Email</th>
              <th className="border px-4 py-2 text-left">Phone</th>
            </tr>
          </thead>

          <tbody>
            {members.map((m: any) => (
              <tr key={m.member_id}>
                <td className="border px-4 py-2">{m.member_id}</td>
                <td className="border px-4 py-2">{m.full_name}</td>
                <td className="border px-4 py-2">{m.email}</td>
                <td className="border px-4 py-2">{m.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}