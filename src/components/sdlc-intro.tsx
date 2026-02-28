"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Route, Target } from "lucide-react";

const stats = [
  {
    icon: Layers,
    value: "6 Etapas",
    label: "del ciclo de vida",
  },
  {
    icon: Route,
    value: "Proceso Estructurado",
    label: "de la idea al mantenimiento",
  },
  {
    icon: Target,
    value: "1 Objetivo",
    label: "software de calidad",
  },
];

export function SdlcIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 sm:py-32 max-w-5xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 sm:mb-16"
      >
        <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4">
          Introducción
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tighter mb-6 leading-tight">
          ¿Qué es el SDLC?
        </h3>
        <p className="text-foreground/50 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto px-2">
          El Ciclo de Vida del Desarrollo de Software (SDLC) es un proceso
          estructurado que guía la creación de software desde la idea inicial
          hasta su mantenimiento. Con herramientas de IA en cada etapa,
          potenciamos la calidad y eficiencia del desarrollo.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mx-auto mb-5">
                <Icon size={24} />
              </div>
              <p className="text-3xl font-black text-foreground tracking-tight mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-foreground/40 font-medium">
                {stat.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
