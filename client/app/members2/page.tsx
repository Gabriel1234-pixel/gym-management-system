"use client";

import { useEffect, useState } from "react";

export default function MembersPage() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("/api/members")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Members</h1>

      <table className="w-full border">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {members.map((m: any) => (
            <tr key={m.member_id}>
              <td>{m.member_id}</td>
              <td>{m.full_name}</td>
              <td>{m.email}</td>
              <td>{m.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}