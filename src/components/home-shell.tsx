"use client";

import dynamic from "next/dynamic";
import { Tool } from "@/data/tools";

// Importación dinámica con SSR desactivado dentro de un Client Component
const HomeContent = dynamic(
  () => import("./home-content").then((mod) => mod.HomeContent),
  { ssr: false, loading: () => <div className="min-h-screen bg-white" /> }
);

export function HomeShell({ tools }: { tools: Tool[] }) {
  return <HomeContent tools={tools} />;
}
