export function GridBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-background relative flex items-center justify-center overflow-hidden pt-20">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, var(--grid-color) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at center, black, transparent 90%)",
        }}
      />

      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-20 w-full">{children}</div>
    </div>
  );
}
