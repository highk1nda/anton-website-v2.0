import { motion } from "framer-motion";

const categories = [
  {
    label: "Languages",
    icon: "⌨",
    skills: ["Python", "JavaScript", "SQL", "Bash"],
  },
  {
    label: "Tools & Frameworks",
    icon: "🛠",
    skills: ["Git", "Flask", "discord.py", "aiohttp", "pygame", "REST APIs"],
  },
  {
    label: "Concepts",
    icon: "🧠",
    skills: [
      "OOP",
      "Async Programming",
      "API Integration",
      "Game Architecture",
      "CLI Design",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-violet-400">
            Toolkit
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Skills
          </h2>
        </motion.div>

        {/* Categories grid */}
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.label}
              variants={fadeUp}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="rounded-2xl border border-white/8 bg-white/3 p-6 transition-all duration-300 hover:border-violet-500/30 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-violet-500/8 cursor-default"
            >
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-xl"
                  aria-hidden="true"
                >
                  {cat.icon}
                </span>
                <h3 className="font-semibold text-white">{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/8 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300 transition-all duration-200 hover:border-violet-500/30 hover:text-white hover:bg-violet-500/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
