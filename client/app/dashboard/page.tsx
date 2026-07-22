"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [memberCount, setMemberCount] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/members")
      .then(async (res) => {
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Failed to load members");
        }

        setMemberCount(Array.isArray(data) ? data.length : 0);
        setError("");
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to load members right now.");
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-2">
        Gym Management Dashboard
      </h1>

      <p className="text-gray-600 mb-8">
        Welcome to Iron Peak Gym Management System
      </p>

      {error ? (
        <p className="text-red-600 mb-6">{error}</p>
      ) : null}

      <div className="grid md:grid-cols-4 gap-6 mb-10">
        <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold">Members</h2>
          <p className="text-4xl font-bold mt-2">
            {memberCount}
          </p>
        </div>

        <div className="bg-green-600 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold">Trainers</h2>
          <p className="text-4xl font-bold mt-2">2</p>
        </div>

        <div className="bg-purple-600 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold">Plans</h2>
          <p className="text-4xl font-bold mt-2">4</p>
        </div>

        <div className="bg-yellow-400 text-black p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold">Payments</h2>
          <p className="text-4xl font-bold mt-2">2</p>
        </div>
      </div>
    </div>
  );
}