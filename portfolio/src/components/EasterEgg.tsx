import { useRef, useState, useCallback, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";

const SPAWN_DISTANCE = 100;

interface Egg {
  id: number;
  x: number;
  y: number;
}

export default function EasterEgg() {
  const sectionRef = useRef<HTMLElement>(null);
  const eggCounter = useRef(0);
  const lastSpawnPos = useRef<{ x: number; y: number } | null>(null);
  const [sectionSize, setSectionSize] = useState({ w: 0, h: 0 });

  const [egg, setEgg] = useState<Egg | null>(null);
  const [collected, setCollected] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const duckX = useMotionValue(0);
  const duckY = useMotionValue(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const update = () =>
      setSectionSize({ w: el.offsetWidth, h: el.offsetHeight });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [10, -10]);

  const handleDrag = useCallback(() => {
    const cx = sectionSize.w / 2 + duckX.get();
    const cy = sectionSize.h / 2 + duckY.get();
    const last = lastSpawnPos.current;

    if (!last) {
      lastSpawnPos.current = { x: cx, y: cy };
      return;
    }

    const dx = cx - last.x;
    const dy = cy - last.y;
    if (Math.sqrt(dx * dx + dy * dy) >= SPAWN_DISTANCE) {
      setEgg({ id: ++eggCounter.current, x: last.x, y: last.y });
      lastSpawnPos.current = { x: cx, y: cy };
    }
  }, [sectionSize, duckX, duckY]);

  const collectEgg = useCallback(() => {
    setEgg(null);
    setCollected((c) => c + 1);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[38vh] items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      <AnimatePresence>
        {egg && (
          <motion.button
            key={egg.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            onClick={collectEgg}
            aria-label="collect egg"
            style={{ position: "absolute", left: egg.x - 16, top: egg.y - 16 }}
            className="cursor-pointer border-none bg-transparent p-0 text-2xl leading-none"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            🥚
          </motion.button>
        )}
      </AnimatePresence>

      {collected > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="pointer-events-none absolute right-4 top-4 select-none font-mono text-sm text-white/50"
        >
          🥚 × {collected}
        </motion.div>
      )}

      <motion.div style={{ y: parallaxY }}>
        <motion.div
          drag
          dragConstraints={sectionRef}
          dragElastic={0.12}
          dragMomentum={false}
          style={{ x: duckX, y: duckY }}
          onDrag={handleDrag}
          onDragStart={() => {
            setIsDragging(true);
            lastSpawnPos.current = null;
          }}
          onDragEnd={() => setIsDragging(false)}
          animate={{ scale: isDragging ? 1.1 : 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 18 }}
          className="cursor-grab select-none active:cursor-grabbing"
          aria-label="🦆"
        >
          <motion.span
            animate={
              isDragging
                ? { rotate: 0, y: 0 }
                : { rotate: [-2, 2, -2], y: [0, -12, 0] }
            }
            transition={{
              duration: 3.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="block text-[7rem] leading-none"
          >
            🦆
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
}
