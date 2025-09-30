"use client";

import { useState, useEffect } from "react";
import { createSupabaseClient } from "@/lib/supabaseClient";

const supabase = createSupabaseClient();

export default function GradingPage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) setUserId(user.id);
    }
    getUser();
  }, []);

  async function handleGrade() {
    if (!userId) {
      setError("Not logged in");
      return;
    }

    setError("");
    setResult("");

    const res = await fetch("/api/grade", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, input }),
    });

    const data = await res.json();
    if (!res.ok) {
      setError(data.error || "Something went wrong");
    } else {
      setResult(data.result);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-96">
        <h1 className="text-xl font-bold mb-4">Grade an Essay</h1>
        <textarea
          className="border p-2 w-full mb-3"
          placeholder="Paste your text here..."
          rows={6}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleGrade}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Grade
        </button>

        {error && <p className="text-red-500 mt-3">{error}</p>}
        {result && <p className="text-green-600 mt-3">{result}</p>}
      </div>
    </main>
  );
}
