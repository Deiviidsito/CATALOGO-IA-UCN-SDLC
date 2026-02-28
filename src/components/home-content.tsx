"use client";

import React, { useEffect, useState } from "react";
import { Tool } from "@/data/tools";

export function HomeContent({ tools }: { tools: Tool[] }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">DISC UCN | AI Tooling</h1>
      <ul className="space-y-2">
        {tools.map((tool) => (
          <li key={tool.id} className="p-4 border rounded shadow-sm">
            <h2 className="font-bold">{tool.name}</h2>
            <p className="text-sm text-slate-600">{tool.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
