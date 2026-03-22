import { motion } from "framer-motion";

const facts = [
  { label: "Based in",   value: "Leipzig, Germany"              },
  { label: "Studying",   value: "Computer Science"              },
  { label: "University", value: "Lancaster University Leipzig"  },
  { label: "Focus",      value: "Backend & Python"              },
  { label: "Languages",  value: "UA · EN · DE · PL · more"     },
  { label: "Interests",  value: "Cycling · Photography · Travel"},
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

export default function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left — text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p variants={fadeUp} className="mb-3 text-xs font-medium uppercase tracking-widest text-violet-400">
              Background
            </motion.p>
            <motion.h2 variants={fadeUp} className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              About Me
            </motion.h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <motion.p variants={fadeUp}>
                I'm a first-year Computer Science student at Lancaster University
                Leipzig, focused on backend development and building real-world
                systems with Python.
              </motion.p>
              <motion.p variants={fadeUp}>
                I enjoy the problem-solving side of engineering — whether that's
                designing an async bot, architecting a game loop, or keeping RAM
                usage tight. I care about code that actually works in production.
              </motion.p>
              <motion.p variants={fadeUp}>
                Outside of code, I cycle through Berlin and Leipzig, photograph
                what I find, and pick up new languages when I travel. I've been
                to over a dozen countries across Europe and Central Asia.
              </motion.p>
            </div>
          </motion.div>

          {/* Right — facts grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {facts.map((fact) => (
              <motion.div
                key={fact.label}
                variants={fadeUp}
                whileHover={{ scale: 1.03, transition: { duration: 0.18 } }}
                className="rounded-xl border border-white/8 bg-white/3 p-4 transition-all duration-300 hover:border-violet-500/30 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-violet-500/8 cursor-default"
              >
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-600">
                  {fact.label}
                </p>
                <p className="text-sm font-medium text-white">{fact.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
