"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";
import Image from "next/image";

export function Navbar() {
  const { theme, toggle } = useTheme();

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-4">
      <nav className="max-w-5xl mx-auto rounded-full glass h-14 flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Image
            src="/disc.png"
            alt="DISC UCN"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <div className="flex flex-col">
            <h1 className="font-black text-foreground text-sm leading-none tracking-tight">
              DISC <span className="text-primary font-medium">UCN</span>
            </h1>
            <p className="text-[7px] text-foreground/50 uppercase tracking-[0.2em] font-bold">
              Catálogo IA
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#requisitos"
            className="text-[10px] font-bold text-foreground/60 hover:text-foreground uppercase tracking-widest transition-colors"
          >
            Etapas SDLC
          </a>
          <a
            href="https://disc.ucn.cl"
            target="_blank"
            className="text-[10px] font-bold text-foreground/60 hover:text-foreground uppercase tracking-widest transition-colors"
          >
            Departamento
          </a>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="w-8 h-8 rounded-full flex items-center justify-center text-foreground/60 hover:text-foreground hover:bg-foreground/10 transition-all"
            aria-label="Cambiar tema"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button className="rounded-full bg-primary text-primary-foreground hover:bg-foreground hover:text-background hover:scale-105 transition-all text-[10px] font-bold px-5 h-8">
            COMENZAR
          </button>
        </div>
      </nav>
    </div>
  );
}
