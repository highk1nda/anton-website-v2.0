import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * EasterEgg — a short, playful hidden moment between the dark transition
 * and the main portfolio content. The duck bobs via CSS animation and drifts
 * very slightly via scroll-scoped parallax.
 *
 * Intentionally has no `id` so the navbar observer ignores it.
 */
export default function EasterEgg() {
  const ref = useRef<HTMLElement>(null);

  // Track scroll progress across the full in-viewport window of this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // ±10 px of parallax drift — very subtle by design
  const duckY = useTransform(scrollYProgress, [0, 1], [10, -10]);

  return (
    <section
      ref={ref}
      className="relative flex h-[38vh] items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      <motion.div
        style={{ y: duckY }}
        className="duck-float select-none"
        aria-label="🦆"
      >
        <span className="text-[7rem] leading-none">🦆</span>
      </motion.div>
    </section>
  );
}
