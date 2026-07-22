"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        router.push("/dashboard");
      } else {
        alert(data.error || "Invalid username or password");
      }
    } catch (error) {
      console.error(error);
      alert("Login failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          Iron Peak Gym Login
        </h1>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="text"
              inputMode="email"
              className="w-full border p-3 rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2">Password</label>
            <input
              type="password"
              className="w-full border p-3 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password or phone number"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white p-3 rounded hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-70"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing in..." : "Login"}
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Members: use your registered email and phone number.
        </p>
        <p className="text-center mt-2 text-sm text-gray-600">
          Demo Login: admin / admin123
        </p>
      </div>
    </div>
  );
}