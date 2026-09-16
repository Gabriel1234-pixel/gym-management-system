"use client";

import { useEffect, useMemo, useState } from "react";

type Member = {
  id?: number;
  member_id?: number;
  full_name?: string;
  gender?: string;
  email?: string;
  phone?: string;
  address?: string;
  date_of_birth?: string;
  join_date?: string;
  status?: string;
};

type MemberFormState = {
  full_name: string;
  gender: string;
  email: string;
  phone: string;
  address: string;
  date_of_birth: string;
  status: string;
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(value);

const emptyForm = (): MemberFormState => ({
  full_name: "",
  gender: "Male",
  email: "",
  phone: "",
  address: "",
  date_of_birth: "",
  status: "Active",
});

export default function DashboardPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<MemberFormState>(emptyForm());
  const [actionMessage, setActionMessage] = useState("");

  const loadMembers = async () => {
    try {
      const res = await fetch("/api/members");
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Failed to load members");
      }

      setMembers(Array.isArray(data) ? data : []);
      setError("");
    } catch (err) {
      console.error(err);
      setMembers([]);
      setError("Unable to load member data right now.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMembers();
  }, []);

  const filteredMembers = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    if (!keyword) return members;

    return members.filter((member) =>
      [member.full_name, member.email, member.phone, member.status]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(keyword))
    );
  }, [members, search]);

  const memberCount = members.length;
  const activeMembers = members.filter(
    (member) => (member.status || "").toLowerCase() === "active"
  ).length;
  const recentMembers = useMemo(
    () =>
      [...members]
        .sort((a, b) => Number(b.id ?? b.member_id ?? 0) - Number(a.id ?? a.member_id ?? 0))
        .slice(0, 5),
    [members]
  );
  const monthlyRevenue = useMemo(
    () => memberCount * 4200 + activeMembers * 1200,
    [memberCount, activeMembers]
  );

  const summaryCards = [
    { label: "Total Members", value: memberCount, change: "+12.4%", tone: "bg-blue-600", icon: "👥" },
    { label: "Active Members", value: activeMembers, change: "+8.1%", tone: "bg-emerald-600", icon: "✅" },
    { label: "Trainers", value: 4, change: "On duty", tone: "bg-violet-600", icon: "🏋️" },
    { label: "Monthly Revenue", value: formatCurrency(monthlyRevenue), change: "+5.3%", tone: "bg-amber-500 text-slate-900", icon: "💰" },
  ];

  const handleEdit = (member: Member) => {
    setEditingId(Number(member.id ?? member.member_id));
    setForm({
      full_name: member.full_name || "",
      gender: member.gender || "Male",
      email: member.email || "",
      phone: member.phone || "",
      address: member.address || "",
      date_of_birth: member.date_of_birth ? String(member.date_of_birth).slice(0, 10) : "",
      status: member.status || "Active",
    });
    setActionMessage("");
  };

  const handleSave = async () => {
    if (!editingId) {
      setActionMessage("Select a member to edit.");
      return;
    }

    try {
      const res = await fetch(`/api/members/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Failed to update member");
      }

      setActionMessage("Member updated successfully.");
      setEditingId(null);
      setForm(emptyForm());
      await loadMembers();
    } catch (err) {
      console.error(err);
      setActionMessage(err instanceof Error ? err.message : "Unable to update member.");
    }
  };

  const handleDelete = async (memberId: number) => {
    if (!memberId) return;

    const confirmed = window.confirm("This will remove the member from the system if possible, or deactivate them if records are linked.");
    if (!confirmed) return;

    try {
      const res = await fetch(`/api/members/${memberId}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Failed to delete member");
      }

      setActionMessage(data?.deactivated ? "Member was deactivated successfully." : "Member deleted successfully.");
      setEditingId((current) => (current === memberId ? null : current));
      await loadMembers();
    } catch (err) {
      console.error(err);
      setActionMessage(err instanceof Error ? err.message : "Unable to delete member.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-8 text-slate-900">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Management panel</p>
            <h1 className="mt-2 text-3xl font-black md:text-4xl">Iron Peak Gym Dashboard</h1>
          </div>

          <div className="flex items-center gap-3">
            <a href="/members/add" className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700">+ Add Member</a>
            <button type="button" className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400">Generate Report</button>
          </div>
        </header>

        {error ? <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div> : null}

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {summaryCards.map((card) => (
            <div key={card.label} className={`${card.tone} rounded-2xl p-5 shadow-lg`}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium opacity-90">{card.label}</p>
                  <p className="mt-3 text-3xl font-black tracking-tight">{card.value}</p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-xl">{card.icon}</div>
              </div>
              <p className="mt-4 text-sm font-semibold opacity-85">{card.change}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-6 xl:grid-cols-[1.8fr_0.9fr]">
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold">Member Directory</h2>
                <p className="text-sm text-slate-500">Search, edit, and remove gym members</p>
              </div>
              <div className="w-full max-w-xs">
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search members..."
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {actionMessage ? <div className="mb-4 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-700">{actionMessage}</div> : null}

            {isLoading ? (
              <div className="rounded-xl bg-slate-100 p-6 text-sm text-slate-500">Loading member data...</div>
            ) : filteredMembers.length === 0 ? (
              <div className="rounded-xl bg-slate-100 p-6 text-sm text-slate-500">No members match your search.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500">
                      <th className="pb-3 pr-4 font-medium">Member</th>
                      <th className="pb-3 pr-4 font-medium">Phone</th>
                      <th className="pb-3 pr-4 font-medium">Status</th>
                      <th className="pb-3 pr-4 font-medium">Joined</th>
                      <th className="pb-3 text-right font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMembers.map((member) => {
                      const memberId = Number(member.id ?? member.member_id ?? 0);
                      const status = (member.status || "Active").toLowerCase();
                      const badgeClass =
                        status === "inactive"
                          ? "bg-slate-200 text-slate-700"
                          : status === "pending"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-emerald-100 text-emerald-700";

                      return (
                        <tr key={memberId || member.email || member.phone} className="border-b border-slate-100 last:border-b-0">
                          <td className="py-3 pr-4">
                            <div>
                              <p className="font-semibold text-slate-900">{member.full_name || "Unnamed member"}</p>
                              <p className="text-xs text-slate-500">{member.email || "No email"}</p>
                            </div>
                          </td>
                          <td className="py-3 pr-4 text-slate-600">{member.phone || "—"}</td>
                          <td className="py-3 pr-4">
                            <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${badgeClass}`}>
                              {member.status || "Active"}
                            </span>
                          </td>
                          <td className="py-3 pr-4 text-slate-600">{member.join_date ? new Date(member.join_date).toLocaleDateString() : "—"}</td>
                          <td className="py-3 text-right">
                            <div className="flex justify-end gap-2">
                              <button type="button" onClick={() => handleEdit(member)} className="rounded-lg bg-blue-600 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-blue-700">Edit</button>
                              <button type="button" onClick={() => handleDelete(memberId)} className="rounded-lg bg-red-600 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-red-700">Delete</button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-lg font-bold">Quick Actions</h2>
              <div className="mt-4 space-y-3">
                <a href="/members/add" className="flex items-center justify-between rounded-xl bg-slate-100 px-4 py-3 font-medium text-slate-700 transition hover:bg-slate-200"><span>Register member</span><span>→</span></a>
                <a href="/plans" className="flex items-center justify-between rounded-xl bg-slate-100 px-4 py-3 font-medium text-slate-700 transition hover:bg-slate-200"><span>Review plans</span><span>→</span></a>
                <a href="/reports" className="flex items-center justify-between rounded-xl bg-slate-100 px-4 py-3 font-medium text-slate-700 transition hover:bg-slate-200"><span>Open reports</span><span>→</span></a>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-900 p-5 text-white shadow-lg">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-300">This month</p>
              <h2 className="mt-3 text-3xl font-black">{formatCurrency(monthlyRevenue)}</h2>
              <p className="mt-2 text-sm text-slate-300">Projected income from active memberships.</p>
              <div className="mt-5 space-y-3 text-sm">
                <div className="flex items-center justify-between"><span className="text-slate-300">Active members</span><span className="font-semibold">{activeMembers}</span></div>
                <div className="flex items-center justify-between"><span className="text-slate-300">New this month</span><span className="font-semibold">{Math.max(3, Math.min(12, memberCount))}</span></div>
                <div className="flex items-center justify-between"><span className="text-slate-300">Attendance</span><span className="font-semibold">92%</span></div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-lg font-bold">{editingId ? "Edit Member" : "Member Details"}</h2>
              <div className="mt-4 space-y-3">
                <input value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Full name" />
                <select value={form.gender} onChange={(e) => setForm({ ...form, gender: e.target.value })} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Email" />
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Phone" />
                <input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Address" />
                <input type="date" value={form.date_of_birth} onChange={(e) => setForm({ ...form, date_of_birth: e.target.value })} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
                <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm">
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Pending">Pending</option>
                </select>

                <button type="button" onClick={handleSave} className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-700">
                  {editingId ? "Save Changes" : "Select a member to edit"}
                </button>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}