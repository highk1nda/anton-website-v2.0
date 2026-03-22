import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.55 } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Gradient layer translates down as hero scrolls out → appears to lag behind (parallax)
  // The bg div is extended 60 px above the section top to prevent a gap at max shift
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  // Text rushes slightly upward for depth
  const textY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      {/* ── Background layers ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Animated RGB gradient */}
        <motion.div
          aria-hidden
          className="granimate-bg absolute inset-x-0 bottom-0"
          style={{ top: "-60px", y: bgY }}
        />
        {/* Fade to black at the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-[#0f0f0f]" />
      </div>

      {/* ── Content ── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ y: textY }}
        className="relative flex flex-col items-center"
      >
        {/* Badge */}
        <motion.span
          variants={fadeUp}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium text-white tracking-wider uppercase backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
          Open to internships
        </motion.span>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="mb-4 text-5xl font-bold tracking-tight text-white drop-shadow-lg sm:text-6xl md:text-7xl"
        >
          Anton Satsuk
        </motion.h1>

        {/* Title */}
        <motion.p variants={fadeUp} className="mb-6 text-xl font-medium sm:text-2xl">
          <span className="text-white font-bold">Backend Developer</span>
          <span className="text-white/50"> / </span>
          <span className="text-white/80">CS Student</span>
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={fadeUp}
          className="mb-10 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          I build backend systems, Discord bots, and interactive apps, and I'm studying Computer Science at Lancaster University Leipzig.</motion.p>

        {/* CTA buttons */}
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:scale-105 hover:shadow-xl hover:shadow-white/20"
          >
            View My Work
          </a>
          <a
            href="https://github.com/highk1nda"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:border-white/50"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.37.6.1.82-.26.82-.58v-2.17c-3.34.72-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48 1 .1-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-xs tracking-widest uppercase">scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
