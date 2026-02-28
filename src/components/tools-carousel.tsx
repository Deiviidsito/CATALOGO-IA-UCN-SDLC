"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import type { Tool } from "@/data/tools";

export function ToolsCarousel({ tools }: { tools: Tool[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    el?.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el?.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  function scroll(direction: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-tool-card]");
    const step = card ? card.offsetWidth + 16 : 340;
    el.scrollBy({
      left: direction === "left" ? -step * 2 : step * 2,
      behavior: "smooth",
    });
  }

  // 4 o menos → grid normal, sin carrusel
  if (tools.length <= 4) {
    return (
      <div className="grid sm:grid-cols-2 gap-4">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative group/carousel">
      {/* Flecha izquierda */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-foreground/10 flex items-center justify-center text-foreground/60 hover:text-foreground transition-all shadow-lg"
        >
          <ChevronLeft size={18} />
        </button>
      )}

      {/* Flecha derecha */}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-foreground/10 flex items-center justify-center text-foreground/60 hover:text-foreground transition-all shadow-lg"
        >
          <ChevronRight size={18} />
        </button>
      )}

      {/* Contenedor scrollable */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style>{`[data-carousel]::-webkit-scrollbar { display: none; }`}</style>
        {tools.map((tool) => (
          <div
            key={tool.id}
            data-tool-card
            className="snap-start shrink-0 w-[calc(50%-8px)] max-sm:w-[85%]"
          >
            <ToolCard tool={tool} />
          </div>
        ))}
      </div>

      {/* Indicador de scroll */}
      {canScrollRight && (
        <div className="flex justify-center mt-4 gap-1">
          <span className="text-[9px] font-bold text-foreground/25 uppercase tracking-widest">
            Desliza para ver más →
          </span>
        </div>
      )}
    </div>
  );
}

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <a
      href={tool.url}
      target="_blank"
      className="group block h-full p-1 rounded-3xl bg-foreground/[0.03] border border-foreground/[0.05] hover:bg-foreground/[0.06] hover:border-foreground/10 transition-all duration-500 shadow-2xl overflow-hidden"
    >
      <div className="p-8 h-full flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <Image
                src={tool.logo}
                alt={tool.name}
                width={28}
                height={28}
                className="rounded-lg"
                unoptimized
              />
              <h5 className="text-xl font-black text-foreground group-hover:text-primary transition-colors">
                {tool.name}
              </h5>
            </div>
            <div className="w-8 h-8 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/30 group-hover:text-foreground group-hover:border-primary transition-all">
              <ArrowRight
                size={14}
                className="-rotate-45 group-hover:rotate-0 transition-transform"
              />
            </div>
          </div>
          <p className="text-foreground/40 text-sm font-medium leading-relaxed">
            {tool.description}
          </p>
        </div>
      </div>
    </a>
  );
}
