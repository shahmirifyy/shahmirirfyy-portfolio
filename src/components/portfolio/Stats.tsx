import { useInView } from "react-intersection-observer";
import { STATS } from "@/constants/portfolio";
import { useCounter } from "@/hooks/use-counter";

function Stat({
  value,
  label,
  suffix,
  start,
}: {
  value: number;
  label: string;
  suffix?: string;
  start: boolean;
}) {
  const n = useCounter(value, 1800, start);
  return (
    <div className="glass-strong rounded-2xl p-6 text-center">
      <div className="text-4xl md:text-5xl font-bold text-gradient">
        {n}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
export function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <section className="relative py-16">
      <div ref={ref} className="mx-auto max-w-6xl px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {STATS.map((s) => (
          <Stat key={s.label} value={s.value} label={s.label} suffix={s.suffix} start={inView} />
        ))}
      </div>
    </section>
  );
}
