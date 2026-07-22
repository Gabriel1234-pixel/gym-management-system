"use client";

import { useState } from "react";

export default function AddMemberPage() {
  const [form, setForm] = useState({
    full_name: "",
    gender: "Male",
    email: "",
    phone: "",
    address: "",
    date_of_birth: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/members/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Member registered successfully!");
      window.location.href = "/";
    } else {
      alert("Registration failed.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-lg"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Member Registration
        </h1>

        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          className="border p-2 w-full mb-4"
          onChange={handleChange}
          required
        />

        <select
          name="gender"
          className="border p-2 w-full mb-4"
          onChange={handleChange}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 w-full mb-4"
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="border p-2 w-full mb-4"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          className="border p-2 w-full mb-4"
          onChange={handleChange}
        />

        <input
          type="date"
          name="date_of_birth"
          className="border p-2 w-full mb-4"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="bg-yellow-400 text-black font-bold px-4 py-2 rounded w-full"
        >
          Register Member
        </button>
      </form>
    </div>
  );
}