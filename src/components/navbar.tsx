"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, ExternalLink, Menu, X } from "lucide-react";
import { useTheme } from "./theme-provider";
import Image from "next/image";

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-background/80 backdrop-blur-xl border-b border-foreground/5 shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto h-16 flex items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 group">
          <Image
            src="/disc.png"
            alt="DISC UCN"
            width={36}
            height={36}
            className="rounded-xl group-hover:scale-105 transition-transform w-8 h-8 sm:w-9 sm:h-9"
          />
          <div>
            <h1 className="font-black text-foreground text-sm sm:text-base leading-none tracking-tight">
              DISC <span className="text-primary">UCN</span>
            </h1>
            <p className="text-[7px] sm:text-[8px] text-foreground/40 uppercase tracking-[0.25em] font-semibold mt-0.5">
              Herramientas IA
            </p>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          <a
            href="#catalogo"
            className="px-4 py-2 text-xs font-semibold text-foreground/60 hover:text-foreground hover:bg-foreground/5 rounded-lg transition-all"
          >
            Catálogo
          </a>
          <a
            href="https://disc.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-semibold text-foreground/60 hover:text-foreground hover:bg-foreground/5 rounded-lg transition-all inline-flex items-center gap-1.5"
          >
            Departamento
            <ExternalLink size={11} className="opacity-40" />
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-foreground/50 hover:text-foreground hover:bg-foreground/5 transition-all"
            aria-label="Cambiar tema"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-foreground/50 hover:text-foreground hover:bg-foreground/5 transition-all"
            aria-label="Menú"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-foreground/5 bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col px-4 py-4 gap-1">
            <a
              href="#catalogo"
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-sm font-semibold text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-lg transition-all"
            >
              Catálogo
            </a>
            <a
              href="https://disc.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-sm font-semibold text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-lg transition-all flex items-center gap-2"
            >
              Departamento
              <ExternalLink size={12} className="opacity-40" />
            </a>
            <a
              href="#catalogo"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-lg bg-primary text-primary-foreground text-center text-sm font-bold px-5 py-3"
            >
              Explorar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
