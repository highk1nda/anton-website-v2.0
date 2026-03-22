import { motion } from "framer-motion";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, tech, highlights, github } = project;

  return (
    <motion.article
      whileHover={{ scale: 1.02, transition: { duration: 0.2, ease: "easeOut" } }}
      className="group flex flex-col rounded-2xl border border-white/8 bg-white/3 p-6 transition-all duration-300 hover:border-violet-500/40 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-violet-500/8 cursor-default"
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold leading-snug text-white">
          {title}
        </h3>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} on GitHub`}
          className="shrink-0 rounded-lg border border-white/10 p-2 text-gray-400 transition-all duration-200 hover:border-violet-500/40 hover:text-violet-300 hover:bg-violet-500/10"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.37.6.1.82-.26.82-.58v-2.17c-3.34.72-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48 1 .1-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
      </div>

      {/* Description */}
      <p className="mb-5 text-sm leading-relaxed text-gray-400">{description}</p>

      {/* Tech stack */}
      <div className="mb-5 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-violet-500/25 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300 transition-colors hover:border-violet-400/40 hover:bg-violet-500/15"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Highlights */}
      <ul className="mt-auto space-y-2">
        {highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-xs text-gray-500">
            <span className="mt-0.5 h-3.5 w-3.5 shrink-0 rounded-full border border-violet-500/40 bg-violet-500/15 flex items-center justify-center">
              <svg className="h-2 w-2 text-violet-400" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="2,6 5,9 10,3" />
              </svg>
            </span>
            {h}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
