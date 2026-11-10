import { useEffect, useState } from "react";

export default function useCountUp(target, active, duration = 1200) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf, start;
    const tick = (t) => {
      start ??= t;
      const p = Math.min((t - start) / duration, 1);
      setN(Math.round(p * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return n;
}
