import { tools } from "@/data/tools";
import { stages } from "@/data/stages";
import { Navbar } from "@/components/navbar";
import { GridBackground } from "@/components/ui/grid-background";
import { SdlcIntro } from "@/components/sdlc-intro";
import { SdlcRoadmap } from "@/components/sdlc-roadmap";
import Image from "next/image";
import {
  Code2,
  Layout,
  ClipboardList,
  FlaskConical,
  RefreshCcw,
  Cloud,
  ArrowRight,
  Zap,
} from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  implementacion: Code2,
  diseno: Layout,
  requisitos: ClipboardList,
  pruebas: FlaskConical,
  mantenimiento: RefreshCcw,
  despliegue: Cloud,
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <GridBackground>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 mb-6 sm:mb-8">
            <Zap size={10} className="text-primary fill-primary" />
            <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-foreground/70">
              DISC UCN
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-foreground tracking-tighter mb-6 sm:mb-8 leading-[0.9]">
            HERRAMIENTAS DE <span className="text-primary">IA</span> <br />
            PARA EL SDLC
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-foreground/50 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed font-medium px-2">
            Directorio de herramientas de Inteligencia Artificial para cada
            etapa del Ciclo de Vida del Desarrollo de Software (SDLC).
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <a
              href="#catalogo"
              className="px-8 sm:px-10 py-3.5 sm:py-4 bg-primary text-primary-foreground rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-foreground hover:text-background transition-all text-center"
            >
              Ver Herramientas
            </a>
            <a
              href="https://disc.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 sm:px-10 py-3.5 sm:py-4 glass text-foreground rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-foreground/10 transition-all text-center"
            >
              Conocer DISC
            </a>
          </div>
        </div>
      </GridBackground>

      {/* SDLC Introduction */}
      <SdlcIntro />

      {/* SDLC Roadmap */}
      <SdlcRoadmap />

      {/* Floating Navigation Pill */}
      <div className="sticky top-20 sm:top-24 z-40 flex justify-center px-4 -mt-10 mb-12 sm:mb-20 pointer-events-none">
        <div className="glass rounded-full px-2 sm:px-4 py-2 flex gap-1 sm:gap-4 pointer-events-auto shadow-2xl">
          {stages.map((stage) => {
            const Icon = categoryIcons[stage.id];
            return (
              <a
                key={stage.id}
                href={`#${stage.id}`}
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-foreground/40 hover:text-primary transition-all"
                title={stage.name}
              >
                <Icon size={16} className="sm:hidden" />
                <Icon size={18} className="hidden sm:block" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Contenido SDLC */}
      <div id="catalogo" className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 sm:pb-40">
        {stages.map((stage, index) => {
          const stageTools = tools.filter((t) => t.category === stage.id);
          const StageIcon = categoryIcons[stage.id];

          return (
            <section key={stage.id} id={stage.id} className="py-12 sm:py-24 scroll-mt-24 sm:scroll-mt-32">
              <div className="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-20">
                {/* Info de la etapa */}
                <div className="md:w-1/3">
                  <div className="md:sticky md:top-40">
                    <div className="flex items-center gap-4 mb-6 sm:mb-8">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-foreground/5 border border-foreground/10 flex items-center justify-center text-primary shadow-2xl shadow-primary/10">
                        <StageIcon size={24} className="sm:hidden" />
                        <StageIcon size={28} className="hidden sm:block" />
                      </div>
                      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-primary/50 to-transparent" />
                    </div>

                    <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-3 sm:mb-4">
                      Fase 0{index + 1}
                    </h3>
                    <h4 className="text-2xl sm:text-4xl font-black text-foreground mb-4 sm:mb-6 tracking-tight leading-tight">
                      {stage.name.split(". ")[1]}
                    </h4>
                    <p className="text-foreground/40 font-medium leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                      {stage.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {stage.subcategories.map((sub) => (
                        <span
                          key={sub}
                          className="px-3 py-1 bg-foreground/5 rounded-lg text-[9px] font-bold text-foreground/40 uppercase border border-foreground/5"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Grilla de herramientas */}
                <div className="md:w-2/3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {stageTools.map((tool) => (
                      <a
                        key={tool.id}
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-1 rounded-2xl sm:rounded-3xl bg-foreground/[0.03] border border-foreground/[0.05] hover:bg-foreground/[0.06] hover:border-foreground/10 transition-all duration-500 shadow-2xl overflow-hidden block"
                      >
                        <div className="p-5 sm:p-8 h-full flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start mb-4 sm:mb-6">
                              <div className="flex items-center gap-3 min-w-0">
                                <Image
                                  src={tool.logo}
                                  alt={tool.name}
                                  width={28}
                                  height={28}
                                  className="rounded-lg shrink-0 w-6 h-6 sm:w-7 sm:h-7"
                                  unoptimized
                                />
                                <h5 className="text-base sm:text-xl font-black text-foreground group-hover:text-primary transition-colors truncate">
                                  {tool.name}
                                </h5>
                              </div>
                              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/30 group-hover:text-foreground group-hover:border-primary transition-all shrink-0 ml-2">
                                <ArrowRight
                                  size={14}
                                  className="-rotate-45 group-hover:rotate-0 transition-transform"
                                />
                              </div>
                            </div>
                            <p className="text-foreground/40 text-xs sm:text-sm font-medium leading-relaxed mb-6 sm:mb-8">
                              {tool.description}
                            </p>
                          </div>

                          <span className="text-[10px] font-black uppercase tracking-widest text-foreground/30 group-hover:text-foreground transition-colors">
                            Ver herramienta <span className="ml-2">→</span>
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Footer */}
      <footer className="py-16 sm:py-40 bg-background border-t border-foreground/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <Image
            src="/disc.png"
            alt="DISC UCN"
            width={64}
            height={64}
            className="rounded-3xl mx-auto mb-8 sm:mb-12 shadow-2xl shadow-foreground/20 w-12 h-12 sm:w-16 sm:h-16"
          />

          <h6 className="text-xl sm:text-2xl font-black text-foreground mb-4 tracking-tighter">
            CATÁLOGO DISC UCN
          </h6>
          <p className="text-foreground/30 text-xs sm:text-sm font-medium max-w-sm mx-auto mb-10 sm:mb-16 px-4">
            Impulsando la integración de la Inteligencia Artificial en la
            Ingeniería de Software.
          </p>

          <div className="mt-16 sm:mt-40 pt-8 sm:pt-10 border-t border-foreground/5 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <span className="text-[9px] font-bold text-foreground/20 uppercase tracking-widest">
              © 2026 DISC UCN. Todos los derechos reservados.
            </span>
            <div className="flex gap-4 items-center">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-[9px] font-bold text-foreground/50 uppercase tracking-widest">
                Plataforma Operativa
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
