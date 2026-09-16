"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function MemberDashboardContent() {
  const searchParams = useSearchParams();
  const memberName = searchParams.get("name") || "Member";

  return (
    <main className="min-h-screen bg-slate-100 p-6 md:p-8">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
          Member dashboard
        </p>
        <h1 className="mt-3 text-4xl font-black text-slate-900">
          Welcome, {memberName}
        </h1>
        <p className="mt-3 text-slate-600">
          Your account has been created successfully. You are now part of Iron Peak Gym.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-slate-900 p-5 text-white">
            <p className="text-sm text-slate-300">Status</p>
            <p className="mt-2 text-2xl font-bold">Active</p>
          </div>
          <div className="rounded-xl bg-emerald-600 p-5 text-white">
            <p className="text-sm text-emerald-100">Membership</p>
            <p className="mt-2 text-2xl font-bold">Basic</p>
          </div>
          <div className="rounded-xl bg-amber-400 p-5 text-slate-900">
            <p className="text-sm text-slate-800">Next step</p>
            <p className="mt-2 text-2xl font-bold">Train</p>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-bold text-slate-900">Your membership overview</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>• Access to gym facilities</li>
            <li>• Trainer support and workout guidance</li>
            <li>• Membership tracking and account status</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default function MemberDashboardPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-100 p-6 text-slate-700">Loading dashboard...</div>}>
      <MemberDashboardContent />
    </Suspense>
  );
}
