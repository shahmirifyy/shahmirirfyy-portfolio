export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-60" />
      <div
        className="blob animate-float-slow"
        style={{
          width: 520,
          height: 520,
          top: -120,
          left: -120,
          background: "oklch(0.78 0.18 200 / 0.55)",
        }}
      />
      <div
        className="blob animate-float"
        style={{
          width: 480,
          height: 480,
          top: "30%",
          right: -160,
          background: "oklch(0.65 0.26 305 / 0.55)",
        }}
      />
      <div
        className="blob animate-float-slow"
        style={{
          width: 420,
          height: 420,
          bottom: -120,
          left: "30%",
          background: "oklch(0.55 0.22 250 / 0.45)",
        }}
      />
    </div>
  );
}
