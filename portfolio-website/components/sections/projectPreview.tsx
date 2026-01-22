"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

type Project = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
  role?: string;
  highlights?: string[];
};

const featuredProjects: Project[] = [
  {
    title: "Cinema Hub",
    category: "Movie Discovery",
    description:
      "API-driven movie platform with dynamic routing, search functionality, and smooth transitions. Real-time data via TMDB API.",
    tech: ["React", "TMDB API", "Tailwind CSS"],
    link: "https://cinema-hub-tau.vercel.app/",
    image: "/home/Screenshot 2026-01-20 215241-artguru.png",
  },
  {
    title: "Admin Dashboard",
    category: "SaaS Interface",
    description:
      "Enterprise-grade admin dashboard with reusable component architecture, data visualization, and responsive table systems.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://dashboard-murex-eta-54.vercel.app/",
    image: "/home/Screenshot 2026-01-20 215706-artguru.png",
  },
];

const internshipProjects: Project[] = [
  {
    title: "E-Transver",
    category: "E-Commerce Platform (Internship)",
    description:
      "Full-stack e-commerce platform built in a cross-functional team environment, featuring authentication systems, vendor tools, and a complex admin dashboard.",
    role: "Front-End Developer",
    highlights: [
      "User & vendor authentication flows",
      "Admin dashboard interfaces",
      "Vendor management features",
      "Team-based API integration",
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Axios", "React Router"],
    link: "https://e-transver.vercel.app/",
    image: "/home/etransver.png",
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const leftItem: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const rightItem: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function ProjectBlock({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.3 }}
      className="grid lg:grid-cols-2 gap-16 lg:px-20 px-5 items-center"
    >
      <motion.div variants={isEven ? leftItem : rightItem}>
        <motion.p
          variants={isEven ? leftItem : rightItem}
          className="tracking-widest text-neutral-500"
        >
          {project.category}
        </motion.p>

        <motion.h2
          variants={isEven ? leftItem : rightItem}
          className="lg:text-5xl text-4xl font-light mt-2 text-white"
        >
          {project.title}
        </motion.h2>

        {project.role && (
          <motion.p
            variants={isEven ? leftItem : rightItem}
            className="text-blue-500 tracking-widest text-sm mt-2"
          >
            {project.role}
          </motion.p>
        )}

        <motion.p
          variants={isEven ? leftItem : rightItem}
          className="py-7 text-neutral-500 lg:text-[17px] text-[20px] max-w-85 lg:max-w-120"
        >
          {project.description}
        </motion.p>
        {project.highlights && (
          <motion.div>
            {project.highlights.map((point: string) => (
              <div key={point} className="flex items-center gap-3">
                <span className="w-1 h-1 bg-white rounded-full" />
                <p className="py-2 text-neutral-500 lg:text-[13px] text-[17px]">
                  {point}
                </p>
              </div>
            ))}
          </motion.div>
        )}

        <motion.div className="flex flex-wrap gap-4 mt-8">
          {project.tech.map((tech: string) => (
            <p
              key={tech}
              className="text-neutral-500 lg:text-[13px] text-[15px]"
            >
              {tech}
            </p>
          ))}
        </motion.div>

        <motion.div className="mt-10">
          <Link
            href={project.link}
            target="_blank"
            className="inline-block px-8 py-4 bg-neutral-700 text-white font-medium hover:bg-neutral-800 hover:scale-105 transition transform duration-300 ease-in-out"
          >
            View Project
          </Link>
        </motion.div>
      </motion.div>
      <motion.div variants={isEven ? rightItem : leftItem}>
        <Link
          href={project.link}
          target="_blank"
          className="group relative block w-full rounded-lg overflow-hidden cursor-pointer"
        >
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            width={800}
            height={600}
            className="w-full h-auto rounded-lg transform transition duration-500 ease-in-out group-hover:scale-105"
          />

          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/95 to-black/0" />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-60 transition-opacity duration-500 ease-in-out" />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
            <div className="bg-white/80 px-6 py-4 rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition duration-300">
              <span className="text-black text-2xl font-bold">→</span>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.section>
  );
}

export default function ProjectsPreview() {
  return (
    <section id="projects" className="w-full py-24 space-y-40">
      <div>
        <p className="text-neutral-500 tracking-[0.2em] text-sm mb-20 lg:px-20 px-5">
          FEATURED PROJECTS
        </p>

        <div className="space-y-32">
          {featuredProjects.map((project, index) => (
            <ProjectBlock key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>

      <div>
        <p className="text-neutral-500 tracking-[0.2em] text-sm mb-20 lg:px-20 px-5">
          INTERNSHIP EXPERIENCE
        </p>

        <div className="space-y-32">
          {internshipProjects.map((project, index) => (
            <ProjectBlock key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
