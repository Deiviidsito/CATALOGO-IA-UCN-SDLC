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
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 mb-8">
            <Zap size={10} className="text-primary fill-primary" />
            <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-foreground/70">
              DISC UCN
            </span>
          </div>

          <h2 className="text-6xl md:text-8xl font-black text-foreground tracking-tighter mb-8 leading-[0.9]">
            HERRAMIENTAS DE <span className="text-primary">IA</span> <br />
            PARA EL SDLC.
          </h2>

          <p className="text-lg md:text-xl text-foreground/50 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Directorio de herramientas de Inteligencia Artificial para cada
            etapa del Ciclo de Vida del Desarrollo de Software (SDLC).
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#requisitos"
              className="px-10 py-4 bg-primary text-primary-foreground rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-foreground hover:text-background transition-all"
            >
              Explorar SDLC
            </a>
            <a
              href="#catalogo"
              className="px-10 py-4 glass text-foreground rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-foreground/10 transition-all"
            >
              Ver Herramientas
            </a>
          </div>
        </div>
      </GridBackground>

      {/* SDLC Introduction */}
      <SdlcIntro />

      {/* SDLC Roadmap */}
      <SdlcRoadmap />

      {/* Floating Navigation Pill */}
      <div className="sticky top-24 z-40 flex justify-center px-4 -mt-10 mb-20 pointer-events-none">
        <div className="glass rounded-full px-4 py-2 flex gap-4 pointer-events-auto shadow-2xl">
          {stages.map((stage) => {
            const Icon = categoryIcons[stage.id];
            return (
              <a
                key={stage.id}
                href={`#${stage.id}`}
                className="w-10 h-10 flex items-center justify-center rounded-full text-foreground/40 hover:text-primary transition-all"
                title={stage.name}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>

      {/* Contenido SDLC */}
      <div id="catalogo" className="max-w-7xl mx-auto px-4 pb-40">
        {stages.map((stage, index) => {
          const stageTools = tools.filter((t) => t.category === stage.id);
          const StageIcon = categoryIcons[stage.id];

          return (
            <section key={stage.id} id={stage.id} className="py-24 scroll-mt-32">
              <div className="flex flex-col md:flex-row gap-20">
                {/* Info de la etapa (lateral) */}
                <div className="md:w-1/3">
                  <div className="md:sticky md:top-40">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-foreground/5 border border-foreground/10 flex items-center justify-center text-primary shadow-2xl shadow-primary/10">
                        <StageIcon size={28} />
                      </div>
                      <div className="h-[1px] w-20 bg-gradient-to-r from-primary/50 to-transparent" />
                    </div>

                    <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4">
                      Fase 0{index + 1}
                    </h3>
                    <h4 className="text-4xl font-black text-foreground mb-6 tracking-tight leading-tight">
                      {stage.name.split(". ")[1]}
                    </h4>
                    <p className="text-foreground/40 font-medium leading-relaxed mb-8">
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
                  <div className="grid sm:grid-cols-2 gap-4">
                    {stageTools.map((tool) => (
                      <div
                        key={tool.id}
                        className="group p-1 rounded-3xl bg-foreground/[0.03] border border-foreground/[0.05] hover:bg-foreground/[0.06] hover:border-foreground/10 transition-all duration-500 shadow-2xl overflow-hidden"
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
                            <p className="text-foreground/40 text-sm font-medium leading-relaxed mb-8">
                              {tool.description}
                            </p>
                          </div>

                          <a
                            href={tool.url}
                            target="_blank"
                            className="text-[10px] font-black uppercase tracking-widest text-foreground/30 group-hover:text-foreground"
                          >
                            Ver herramienta <span className="ml-2">→</span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Footer */}
      <footer className="py-40 bg-background border-t border-foreground/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Image
            src="/disc.png"
            alt="DISC UCN"
            width={64}
            height={64}
            className="rounded-3xl mx-auto mb-12 shadow-2xl shadow-foreground/20"
          />

          <h6 className="text-2xl font-black text-foreground mb-4 tracking-tighter">
            CATÁLOGO DISC UCN
          </h6>
          <p className="text-foreground/30 text-sm font-medium max-w-sm mx-auto mb-16">
            Impulsando la integración de la Inteligencia Artificial en la
            Ingeniería de Software.
          </p>

          <div className="mt-40 pt-10 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-6">
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
