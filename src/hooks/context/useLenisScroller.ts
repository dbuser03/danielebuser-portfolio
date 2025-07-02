import { useState, useEffect, useRef } from "react";
import Lenis from "lenis";

export function useLenisScroller() {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const scroller = new Lenis({
      duration: 1.8,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      lerp: 0.07,
      wheelMultiplier: 0.8,
    });

    function raf(time: number) {
      scroller.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);
    setLenis(scroller);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      if (scroller) {
        scroller.destroy();
      }
    };
  }, []);

  return lenis;
}
