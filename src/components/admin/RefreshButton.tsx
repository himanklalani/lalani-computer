"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export function RefreshButton() {
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    router.refresh();
    setTimeout(() => setRefreshing(false), 800); // Visual feedback
  };

  return (
    <button
      onClick={handleRefresh}
      disabled={refreshing}
      className="p-2 rounded-full hover:bg-black/5 transition-colors disabled:opacity-50"
      title="Refresh data"
    >
      <svg
        className={`w-5 h-5 text-primary ${refreshing ? "animate-spin" : ""}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    </button>
  );
}
