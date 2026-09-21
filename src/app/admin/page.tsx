"use client";
import React, { useEffect, useState } from "react";

type Entry = {
  response: string;
  timestamp: string;
  userAgent?: string;
  ip?: string;
};

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_TOKEN || "meitcy2026"; // fallback for client, real check should be server but we keep simple

  const checkAuth = () => {
    // Simple client check - for real privacy, set ADMIN_TOKEN env in Vercel and check server side
    // This is a personal project, so simple password is okay
    const expected = "meitcy2026"; // default, user should change via env
    if (password === expected || password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setAuthed(true);
      setError("");
      fetchData();
    } else {
      // Also try server check via header
      fetchDataWithAuth(password);
    }
  };

  const fetchDataWithAuth = async (pwd: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/response", {
        headers: { Authorization: `Bearer ${pwd}` },
      });
      const json = await res.json();
      if (json.total !== undefined) {
        setData(json);
        setAuthed(true);
        setError("");
      } else {
        setError("Wrong password");
      }
    } catch (e) {
      setError("Failed to load");
    }
    setLoading(false);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/response");
      const json = await res.json();
      setData(json);
    } catch (e) {
      setError("Failed to load data");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (authed) {
      const interval = setInterval(fetchData, 5000);
      return () => clearInterval(interval);
    }
  }, [authed]);

  if (!authed) {
    return (
      <div className="min-h-screen bg-[#faf6f0] flex items-center justify-center p-6">
        <div className="w-full max-w-[400px] bg-[#fffbf0] border-[4px] border-[#1a1f3d] p-6" style={{ boxShadow: "8px 8px 0 #1a1f3d" }}>
          <h1 className="font-mono text-[14px] text-[#1a1f3d] mb-1">ADMIN ONLY</h1>
          <p className="text-[13px] text-[#2a3560]/60 mb-6">This page is private. Enter password to view responses.</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full border-[3px] border-[#1a1f3d] p-3 text-[14px] bg-white mb-3 outline-none"
            onKeyDown={(e) => e.key === "Enter" && checkAuth()}
          />
          {error && <p className="text-[12px] text-red-600 mb-3">{error}</p>}
          <button onClick={checkAuth} className="w-full bg-[#8a6bc9] border-[3px] border-[#1a1f3d] text-white py-3 text-[13px] font-mono" style={{ boxShadow: "3px 3px 0 #1a1f3d" }}>
            Enter
          </button>
          <p className="text-[10px] text-[#2a3560]/40 mt-4 font-mono">Default: meitcy2026 - Change in Vercel env ADMIN_TOKEN</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf6f0] p-4 md:p-8">
      <div className="max-w-[800px] mx-auto">
        <div className="bg-[#fffbf0] border-[4px] border-[#1a1f3d] p-6 mb-6" style={{ boxShadow: "8px 8px 0 #1a1f3d" }}>
          <h1 className="font-mono text-[18px] text-[#1a1f3d] mb-6">Responses for Meitcy</h1>

          {loading && !data ? (
            <p className="text-[13px]">Loading...</p>
          ) : data ? (
            <>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white border-[3px] border-[#1a1f3d] p-4 text-center">
                  <div className="font-mono text-[10px] text-[#2a3560]/60 mb-1">VISITS</div>
                  <div className="font-mono text-[24px] text-[#1a1f3d]">{data.visits || 0}</div>
                </div>
                <div className="bg-[#c5b3e6]/30 border-[3px] border-[#1a1f3d] p-4 text-center">
                  <div className="font-mono text-[10px] text-[#8a6bc9] mb-1">YES</div>
                  <div className="font-mono text-[24px] text-[#1a1f3d]">{data.yes || 0}</div>
                </div>
                <div className="bg-white border-[3px] border-[#1a1f3d] p-4 text-center">
                  <div className="font-mono text-[10px] text-[#2a3560]/60 mb-1">NO</div>
                  <div className="font-mono text-[24px] text-[#1a1f3d]">{data.no || 0}</div>
                </div>
              </div>

              <h2 className="font-mono text-[12px] mb-3">Recent responses (last 50)</h2>
              <div className="space-y-2 max-h-[400px] overflow-y-auto">
                {data.entries?.reverse().map((entry: Entry, i: number) => (
                  <div key={i} className="flex justify-between items-center bg-white border-2 border-[#1a1f3d]/20 p-2 text-[12px]">
                    <span className={`px-2 py-0.5 font-mono text-[10px] border ${entry.response === "yes" ? "bg-[#c5b3e6] border-[#8a6bc9] text-[#1a1f3d]" : entry.response === "no" ? "bg-[#f4a7b9]/30 border-[#f4a7b9] text-[#1a1f3d]" : "bg-white border-[#1a1f3d]/20 text-[#2a3560]/60"}`}>
                      {entry.response.toUpperCase()}
                    </span>
                    <span className="text-[11px] text-[#2a3560]/70">{new Date(entry.timestamp).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <button onClick={fetchData} className="mt-6 bg-white border-[3px] border-[#1a1f3d] px-4 py-2 text-[12px] font-mono" style={{ boxShadow: "3px 3px 0 #1a1f3d" }}>
                Refresh
              </button>
            </>
          ) : (
            <p>No data yet</p>
          )}
        </div>

        <div className="bg-[#1a1f3d] text-white p-4 font-mono text-[11px] leading-[1.6]">
          <p>To protect this page, set environment variables in Vercel:</p>
          <p className="mt-2 text-[#c5b3e6]">ADMIN_TOKEN=your_secret_password</p>
          <p className="mt-1">Then update the password check in src/app/admin/page.tsx</p>
          <p className="mt-3 opacity-60">For better persistence, consider Vercel KV or Blob storage. Current file storage is ephemeral on serverless.</p>
        </div>
      </div>
    </div>
  );
}
