import { useEffect, useRef, useState } from "react";

export function useCounter(target: number, duration = 1800, start = false) {
  const [n, setN] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!start || started.current) return;
    started.current = true;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return n;
}
