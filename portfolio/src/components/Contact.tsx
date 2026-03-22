import { motion } from "framer-motion";

const links = [
  {
    label: "Email",
    value: "anton@asatsuk.com",
    href: "mailto:anton@asatsuk.com",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="2,4 12,13 22,4" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/highk1nda",
    href: "https://github.com/highk1nda",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.37.6.1.82-.26.82-.58v-2.17c-3.34.72-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48 1 .1-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/anton-satsuk",
    href: "https://www.linkedin.com/in/anton-satsuk-48602a299/",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-2xl text-center">
        {/* Section header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p variants={fadeUp} className="mb-3 text-xs font-medium uppercase tracking-widest text-violet-400">
            Get in touch
          </motion.p>
          <motion.h2 variants={fadeUp} className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let's work together
          </motion.h2>
          <motion.p variants={fadeUp} className="mb-2 text-gray-400">
            Currently open to internship opportunities.
          </motion.p>
          <motion.p variants={fadeUp} className="mb-14 text-sm text-gray-500">
            Whether you have a project in mind, a question, or just want to say
            hi — my inbox is open.
          </motion.p>
        </motion.div>

        {/* Links */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-4"
        >
          {links.map((link) => (
            <motion.a
              key={link.label}
              variants={fadeUp}
              whileHover={{ x: 4, transition: { duration: 0.15 } }}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 rounded-xl border border-white/8 bg-white/3 px-6 py-4 text-left transition-all duration-300 hover:border-violet-500/35 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-violet-500/8"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all duration-200 group-hover:border-violet-500/40 group-hover:text-violet-400 group-hover:bg-violet-500/10">
                {link.icon}
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-600">
                  {link.label}
                </p>
                <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {link.value}
                </p>
              </div>
              <svg
                className="ml-auto h-4 w-4 text-gray-600 transition-all duration-200 group-hover:text-violet-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9,18 15,12 9,6" />
              </svg>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
