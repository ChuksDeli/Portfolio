"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { JSX, useState } from "react";

interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  type: "Internship" | "Freelance";
  description: string;
  stack: string[];
}

const experiences: ExperienceItem[] = [
  {
    year: "2025",
    role: "Intern Software Engineer",
    company: "DevSet — E-Transver",
    type: "Internship",
    description:
      "Built multi-role e-commerce flows in a cross-functional team — authentication systems, vendor tools, product management, and an admin dashboard. Integrated REST APIs provided by the backend team while maintaining consistency across the entire application.",
    stack: ["React", "Vite", "Tailwind CSS", "Axios", "React Router"],
  },
  {
    year: "2025",
    role: "Freelance Front-End Engineer",
    company: "Cinema Hub",
    type: "Freelance",
    description:
      "Designed and built an API-driven movie discovery platform integrating the TMDB API for real-time data. Implemented dynamic routing, search functionality, and smooth page transitions with a focus on performance and responsiveness.",
    stack: ["React", "TMDB API", "Tailwind CSS", "React Router"],
  },
  {
    year: "2025",
    role: "Freelance Front-End Engineer",
    company: "Admin Dashboard",
    type: "Freelance",
    description:
      "Engineered an enterprise-grade SaaS interface with a reusable component architecture. Includes data visualisation, responsive table systems, and interactive UI patterns that mirror real-world large-scale frontend practices.",
    stack: ["React", "Tailwind CSS", "JavaScript", "Chart.js"],
  },
  {
    year: "2026",
    role: "Freelance Front-End Engineer",
    company: "BillSplitSafe",
    type: "Freelance",
    description:
      "Developed a shared expense tracker that solves a real-world problem for flatmates and groups. Features automatic balance computation, authentication, expense history, and a clear summary dashboard.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
];

const panelVariants: Variants = {
  hidden: { opacity: 0, height: 0 },
  show: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.42, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, delay: 0.08, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

const stackItem: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 0.15 + i * 0.06, duration: 0.28, ease: "easeOut" },
  }),
};

function ExperienceRow({
  exp,
  index,
  isOpen,
  onToggle,
}: {
  exp: ExperienceItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-t border-neutral-800 last:border-b last:border-neutral-800">
      <button
        onClick={onToggle}
        className="w-full text-left group"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4 sm:gap-8 py-5 sm:py-6 px-0">
          <span className="text-[11px] tracking-[0.18em] text-neutral-700 shrink-0 w-6 select-none group-hover:text-neutral-500 transition-colors duration-200">
            {String(index + 1).padStart(2, "0")}
          </span>


          <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:gap-6 min-w-0">
            <h3
              className={`
                text-lg sm:text-2xl font-light leading-snug transition-colors duration-200 shrink-0
                ${isOpen ? "text-white" : "text-neutral-300 group-hover:text-white"}
              `}
            >
              {exp.company}
            </h3>
            <span className="hidden sm:block text-neutral-800 text-sm select-none">/</span>
            <p className="text-neutral-600 text-[12px] sm:text-[13px] tracking-wide truncate group-hover:text-neutral-400 transition-colors duration-200">
              {exp.role}
            </p>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 shrink-0">
            <span className="hidden sm:block text-[11px] tracking-widest text-neutral-600">
              {exp.year}
            </span>
            <span
              className={`
                hidden md:block text-[10px] tracking-[0.18em] uppercase px-2.5 py-0.5 border
                transition-colors duration-200
                ${exp.type === "Internship"
                  ? "text-blue-400 border-blue-500/30"
                  : "text-neutral-500 border-neutral-700"}
              `}
            >
              {exp.type}
            </span>
            <div
              className={`
                w-7 h-7 flex items-center justify-center border transition-all duration-300
                ${isOpen
                  ? "border-white text-white rotate-45"
                  : "border-neutral-700 text-neutral-500 group-hover:border-neutral-500 group-hover:text-neutral-300"}
              `}
            >
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <line x1="5.5" y1="0" x2="5.5" y2="11" stroke="currentColor" strokeWidth="1.2" />
                <line x1="0" y1="5.5" x2="11" y2="5.5" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </div>
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="panel"
            variants={panelVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="overflow-hidden"
          >
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="pb-8 pl-10 sm:pl-14 pr-0 sm:pr-4"
            >
              <p className="sm:hidden text-[10px] tracking-widest text-neutral-600 mb-4">
                {exp.year}
              </p>


              <p className="text-neutral-400 text-[14px] sm:text-[15px] leading-[1.85] max-w-2xl mb-7">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.stack.map((s, i) => (
                  <motion.span
                    key={s}
                    custom={i}
                    variants={stackItem}
                    initial="hidden"
                    animate="show"
                    className="text-[11px] tracking-wide text-neutral-400 border border-neutral-700 px-3 py-1 hover:border-neutral-500 hover:text-neutral-200 transition-colors duration-150"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Experience(): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section id="experience" className="py-28 sm:py-36 px-5 sm:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 sm:mb-16"
        >
          <p className="text-[10px] tracking-[0.3em] text-neutral-600 uppercase mb-4">
            Work History
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.1]">
            Experience
          </h2>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
        >
          {experiences.map((exp, i) => (
            <ExperienceRow
              key={i}
              exp={exp}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}