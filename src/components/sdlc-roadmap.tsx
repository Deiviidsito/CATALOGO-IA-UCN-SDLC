"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { stages } from "@/data/stages";

export function SdlcRoadmap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-32 max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4">
          Proceso
        </h2>
        <h3 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter leading-tight">
          Roadmap del SDLC
        </h3>
      </motion.div>

      {/* Desktop: horizontal timeline */}
      <div className="hidden md:block">
        {/* Line */}
        <div className="relative mx-8">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] bg-gradient-to-r from-primary/20 via-primary to-primary/20 origin-left"
          />
        </div>

        {/* Nodes */}
        <div className="grid grid-cols-6 gap-4 -mt-[9px]">
          {stages.map((stage, i) => {
            const Icon = stage.icon;
            const isHovered = hoveredIndex === i;
            return (
              <motion.a
                key={stage.id}
                href={`#${stage.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="flex flex-col items-center text-center group"
              >
                {/* Dot on the line */}
                <div
                  className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    isHovered
                      ? "bg-primary border-primary scale-125 shadow-lg shadow-primary/30"
                      : "bg-background border-primary/40"
                  }`}
                />

                {/* Icon */}
                <div
                  className={`mt-5 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    isHovered
                      ? "bg-primary/15 border-primary/30 text-primary scale-110"
                      : "bg-foreground/5 border-foreground/10 text-foreground/40"
                  } border`}
                >
                  <Icon size={24} />
                </div>

                {/* Label */}
                <p
                  className={`mt-3 text-[11px] font-bold uppercase tracking-wider transition-colors duration-300 ${
                    isHovered ? "text-primary" : "text-foreground/50"
                  }`}
                >
                  {stage.name.split(". ")[1]}
                </p>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={
                    isHovered
                      ? { opacity: 1, height: "auto" }
                      : { opacity: 0, height: 0 }
                  }
                  transition={{ duration: 0.2 }}
                  className="text-xs text-foreground/40 font-medium mt-2 leading-relaxed overflow-hidden"
                >
                  {stage.description}
                </motion.p>
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="md:hidden relative pl-8">
        {/* Vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/20 via-primary to-primary/20 origin-top"
        />

        <div className="space-y-8">
          {stages.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <motion.a
                key={stage.id}
                href={`#${stage.id}`}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="flex items-start gap-4 group relative"
              >
                {/* Dot */}
                <div className="absolute -left-8 top-4 w-4 h-4 rounded-full border-2 border-primary/40 bg-background group-hover:bg-primary group-hover:border-primary transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-primary/30" />

                {/* Content */}
                <div className="glass rounded-2xl p-5 flex items-center gap-4 flex-1 group-hover:border-primary/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center text-foreground/40 group-hover:text-primary group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300 shrink-0">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                      {stage.name.split(". ")[1]}
                    </p>
                    <p className="text-xs text-foreground/40 mt-1 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
