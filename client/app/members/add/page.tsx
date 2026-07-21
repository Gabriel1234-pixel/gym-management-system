"use client";

import { useEffect, useState } from "react";

export default function MembersPage() {
  const [members, setMembers] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/members")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">Gym Members</h1>

        <a
          href="/members/add"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Add Member
        </a>
      </div>

      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-black text-white">
            <th className="p-3">ID</th>
            <th className="p-3">Name</th>
            <th className="p-3">Gender</th>
            <th className="p-3">Email</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {members.map((member) => (
            <tr key={member.member_id} className="border-b">
              <td className="p-3">{member.member_id}</td>
              <td className="p-3">{member.full_name}</td>
              <td className="p-3">{member.gender}</td>
              <td className="p-3">{member.email}</td>
              <td className="p-3">{member.phone}</td>
              <td className="p-3">{member.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}