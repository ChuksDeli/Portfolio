"use client";

import { motion } from "framer-motion";
import { JSX } from "react";

interface ExperienceItem {
  year: string;
  title: string;
  company: string;
}

const experiences: ExperienceItem[] = [
  {
    year: "2025",
    title: "Intern Software Engineer",
    company: "Alphosa (E-Transver)",
  },
  {
    year: "2025",
    title: "Freelance Front-End Developer",
    company: "Cinema Hub",
  },
  {
    year: "2025",
    title: "Freelance Front-End Developer",
    company: "Admin Dashboard",
  },
];

export default function Experience(): JSX.Element {
  return (
    <section id="experience" className="py-32 px-6 md:px-12">
      <div className="max-w-225 mx-auto">
        <h2 className="text-4xl font-bold text-white mb-20">Experience</h2>

        <div className="relative pl-10 space-y-12">
          <div className="absolute left-2 top-0 h-full w-px bg-neutral-300 dark:bg-neutral-700" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <span className="absolute -left-9.5 top-6 h-3 w-3 rounded-full bg-black dark:bg-white" />

              <div className=" border  dark:border-neutral-700 bg-black p-8">
                <p className="text-sm font-medium text-neutral-500 mb-2">
                  {exp.year}
                </p>
                <h3 className="text-xl text-white font-semibold">
                  {exp.title}
                </h3>
                <p className="text-neutral-500">{exp.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
