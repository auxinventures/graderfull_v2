"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function DashboardPage() {
  const supabase = createClientComponentClient();
  const [user, setUser] = useState<any>(null);
  const [plan, setPlan] = useState<"Free" | "Pro">("Free");
  const [file, setFile] = useState<File | null>(null);
  const [feedback, setFeedback] = useState<string>("");

  // --- Load user ---
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);

      // you can fetch plan from DB later – for now default = Free
      setPlan("Free");
    };
    getUser();
  }, [supabase]);

  // --- Upload & grade ---
  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/grade", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (data.error) {
      alert(data.error);
    } else {
      setFeedback(data.feedback);
    }
  };

  // --- Sign out ---
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  // --- Upgrade (Stripe) ---
  const handleUpgrade = async () => {
    const res = await fetch("/api/checkout", { method: "POST" });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      {/* --- Header / Account Info --- */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        {user && (
          <div className="text-sm text-gray-600">
            {user.email} — <span className="font-medium">{plan}</span>
          </div>
        )}
      </div>

      {/* --- Actions --- */}
      <div className="flex gap-4">
        {plan === "Free" && (
          <button
            onClick={handleUpgrade}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Upgrade to Pro
          </button>
        )}
        <button
          onClick={handleSignOut}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Sign Out
        </button>
      </div>

      {/* --- Upload box --- */}
      <div className="border-2 border-dashed p-6 rounded-lg text-center">
        <p className="mb-2">Upload an essay (PDF, DOCX, TXT, or image)</p>
        <input
          type="file"
          accept=".pdf,.docx,.txt,image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <button
          onClick={handleUpload}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
        >
          Grade Essay
        </button>
      </div>

      {/* --- Results --- */}
      {feedback && (
        <div className="p-4 border rounded-lg bg-gray-50">
          <h2 className="font-semibold mb-2">AI Feedback</h2>
          <pre className="whitespace-pre-wrap">{feedback}</pre>
        </div>
      )}
    </div>
  );
}
