"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage({
  searchParams,
}: {
  searchParams?: Promise<{ plan?: string | string[] | undefined; class?: string | string[] | undefined }>;
}) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedPlan = "basic";

  const planLabelMap: Record<string, string> = {
    basic: "Basic",
    premium: "Premium",
    elite: "Elite",
  };

  const planLabel = planLabelMap[selectedPlan] || "Basic";
  const selectedClass = "";

  const handlePhoneChange = (value: string) => {
    const onlyNumbers = value.replace(/[^0-9]/g, "");
    setPhoneNumber(onlyNumbers);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage("");

    if (password !== confirmPassword) {
      setStatusMessage("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/members/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone: phoneNumber,
          password,
          plan: planLabel,
          className: selectedClass || "General",
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatusMessage(data.message || "Member registered successfully!");
        setFullName("");
        setEmail("");
        setPhoneNumber("");
        setPassword("");
        setConfirmPassword("");
      } else {
        setStatusMessage(data.error || "Registration failed.");
      }
    } catch (error) {
      console.error(error);
      setStatusMessage("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-900 px-6">
      <div className="w-full max-w-lg rounded-xl bg-white p-8 shadow-2xl">
        <h1 className="mb-6 text-center text-4xl font-bold text-yellow-500">
          Iron Peak Gym
        </h1>

        <h2 className="mb-8 text-center text-2xl font-semibold text-gray-800">
          Create Your Account
        </h2>

        <div className="mb-6 rounded-lg border border-yellow-500 bg-yellow-50 p-4 text-center text-sm text-gray-700">
          Selected plan: <span className="font-semibold text-yellow-700">{planLabel}</span>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3 focus:border-yellow-500 focus:outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3 focus:border-yellow-500 focus:outline-none"
          />

          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => handlePhoneChange(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3 focus:border-yellow-500 focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3 focus:border-yellow-500 focus:outline-none"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3 focus:border-yellow-500 focus:outline-none"
          />

          {statusMessage ? (
            <p className="text-sm text-center text-gray-700">{statusMessage}</p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-yellow-500 py-3 font-bold text-black hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-yellow-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}