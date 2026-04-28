"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { useState, useEffect, useRef, useCallback } from "react";

type ProjectDetails = {
  fullDescription: string;
  techStack: string[];
  role?: string;
  highlights?: string[];
  liveLink: string;
  githubLink?: string;
};

type Project = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
  role?: string;
  highlights?: string[];
  details: ProjectDetails;
};

const featuredProjects: Project[] = [
  {
    title: "Cinema Hub",
    category: "Movie Discovery",
    description:
      "API-driven movie platform with dynamic routing, search functionality, and smooth transitions. Real-time data via TMDB API.",
    tech: ["React", "TMDB API", "Tailwind CSS"],
    link: "https://cinema-hub-tau.vercel.app/",
    image: "/home/Screenshot 2026-04-01 111937.png",
    details: {
      fullDescription:
        "Cinema Hub is a modern, API-driven web application designed to provide users with a seamless movie discovery experience. The platform integrates with the TMDB API to deliver real-time data on trending, popular, and newly released movies, allowing users to explore content dynamically.\n\nThe application focuses heavily on performance and user experience, implementing smooth page transitions and efficient data fetching strategies to ensure responsiveness. Users can search for movies, view detailed information, and navigate through different categories without friction.\n\nFrom an architectural standpoint, the project demonstrates strong use of component-based design, reusable UI patterns, and clean state management. Dynamic routing enables each movie to have its own dedicated page, enhancing both usability and scalability.\n\nThe interface is designed with a modern, minimal aesthetic, emphasizing clarity and accessibility while maintaining visual engagement through motion and interaction.",
      techStack: ["React", "TMDB API", "Tailwind CSS", "React Router", "Framer Motion"],
      liveLink: "https://cinema-hub-tau.vercel.app/",
      githubLink: "https://github.com/ChuksDeli/cinema-hub.git",
    },
  },
  {
    title: "BillSplitSafe",
    category: "FinTech",
    description:
      "BillSpiltSafe is a web application designed to help people manage shared expenses without confusion. it allows users to split bills, track who owes what, and view their personal expense history in a clear and simple dashboard.",
    tech: ["Next.js", "Typescript", "Tailwind CSS", "Framer motion"],
    link: "https://bill-split-safe.vercel.app/",
    image: "/home/Screenshot 2026-04-01 112235.png",
    details: {
      fullDescription:
        "BillSplitSafe is a web-based application designed to simplify how groups manage and track shared expenses. It addresses a common real-world problem faced by students, flatmates, and shared households where managing contributions often leads to confusion, forgotten payments, and disputes.\n\nThe platform allows users to record shared expenses, automatically calculate individual balances, and keep track of payment confirmations in a transparent and structured way. By eliminating manual calculations and unclear records, BillSplitSafe improves accountability and reduces friction between users.\n\nThe application includes core features such as user registration and authentication, expense entry and tracking, automatic balance computation, and a summary dashboard that gives users a clear overview of who owes what. The interface is designed to be responsive and intuitive, ensuring usability across different devices.\n\nBillSplitSafe also considers sustainability from a product standpoint, with a lightweight monetization model based on non-intrusive advertisements displayed only in low-interaction areas such as summary views.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://bill-split-safe.vercel.app/",
      githubLink: "https://github.com/ChuksDeli/BillSplitSafe.git",
    },
  },
  {
    title: "Admin Dashboard",
    category: "SaaS Interface",
    description:
      "Enterprise-grade admin dashboard with reusable component architecture, data visualization, and responsive table systems.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://dashboard-murex-eta-54.vercel.app/",
    image: "/home/Screenshot 2026-01-20 215706-artguru.png",
    details: {
      fullDescription:
        "The Admin Dashboard is a scalable, enterprise-style interface built to manage and visualize structured data efficiently. It is designed to simulate real-world SaaS dashboard environments, focusing on usability, modularity, and responsiveness.\n\nThe application features reusable UI components, structured layouts, and responsive table systems that adapt across devices. It emphasizes clean data presentation, allowing users to interact with and interpret information quickly.\n\nA key strength of the project lies in its component architecture, where elements such as cards, tables, and navigation systems are designed for reusability and consistency. This approach mirrors real-world frontend development practices in large-scale applications.\n\nThe dashboard also incorporates basic data visualization techniques and interactive UI behaviors, enhancing user engagement while maintaining clarity.",
      techStack: ["React", "Tailwind CSS", "JavaScript", "Chart.js"],
      liveLink: "https://dashboard-murex-eta-54.vercel.app/",
      githubLink: "https://github.com/ChuksDeli/personal-dashboard.git",
    },
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
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Axios", "React Router"],
    link: "https://e-transver.vercel.app/",
    image: "/home/etransver.png",
    details: {
      fullDescription:
        "E-Transver is a full-stack e-commerce platform developed within a collaborative, team-based environment during an internship. The project focuses on building a multi-role system that supports users, vendors, and administrators within a single ecosystem.\n\nThe platform includes core e-commerce functionalities such as authentication systems, product management, vendor tools, and an administrative dashboard for overseeing platform activities. It reflects real-world application complexity, with multiple user flows and interconnected features.\n\nAs a Front-End Developer on the project, the focus was on building responsive interfaces, implementing user and vendor workflows, and integrating APIs provided by the backend team. This required working within a structured codebase, collaborating with other developers, and maintaining consistency across the application.\n\nThe architecture emphasizes scalability and modular design, allowing different parts of the system to evolve independently while maintaining overall cohesion.",
      techStack: ["React", "Vite", "Tailwind CSS", "Axios", "React Router"],
      role: "Front-End Developer",
      highlights: [
        "User & vendor authentication flows",
        "Admin dashboard interfaces",
        "Vendor management features",
      ],
      liveLink: "https://e-transver.vercel.app/",
      githubLink: "https://github.com/deveset/E-transver.git",
    },
  },
];

function useTypewriter(text: string, charDelay = 22, active = false) {
  const [displayed, setDisplayed] = useState("");
  const rafRef = useRef<number>(0);
  const indexRef = useRef(0);
  const lastTimeRef = useRef(0);

  const reset = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    indexRef.current = 0;
    lastTimeRef.current = 0;
    setDisplayed("");
  }, []);

  useEffect(() => {
    if (!active) {
      const id = requestAnimationFrame(() => {
        reset();
      });
      return () => cancelAnimationFrame(id);
    }

    cancelAnimationFrame(rafRef.current);
    indexRef.current = 0;
    lastTimeRef.current = 0;

    const tick = (timestamp: number) => {
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = timestamp;
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const elapsed = timestamp - lastTimeRef.current;

      if (elapsed >= charDelay) {
        const charsToAdd = Math.min(Math.floor(elapsed / charDelay), 3);
        indexRef.current = Math.min(indexRef.current + charsToAdd, text.length);
        lastTimeRef.current = timestamp;
        setDisplayed(text.slice(0, indexRef.current));
      }

      if (indexRef.current < text.length) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, text, charDelay, reset]);

  return displayed;
}

function ProjectDetailDrawer({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [typingActive, setTypingActive] = useState(false);

  const displayedText = useTypewriter(
    project?.details.fullDescription ?? "",
    15,
    typingActive
  );

  useEffect(() => {
    let id: ReturnType<typeof setTimeout>;
    if (!project) {
      id = setTimeout(() => setTypingActive(false), 0);
    } else {
      id = setTimeout(() => setTypingActive(true), 520);
    }
    return () => clearTimeout(id);
  }, [project]);

  useEffect(() => {
    document.body.style.overflow = project ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  const isTyping =
    typingActive &&
    displayedText.length < (project?.details.fullDescription.length ?? 0);

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          />

          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            className="fixed top-0 right-0 h-full z-50 flex flex-col w-full sm:w-[92vw] md:w-[62vw] lg:w-[48vw] xl:w-[42vw] bg-[#0e0e0e] border-l border-neutral-800"
          >
            <div className="flex items-start justify-between px-6 sm:px-8 pt-8 pb-6 border-b border-neutral-800 shrink-0">
              <div>
                <p className="text-[10px] tracking-[0.25em] text-neutral-500 uppercase mb-1">
                  {project.category}
                </p>
                <h2 className="text-2xl sm:text-3xl font-light text-white leading-tight">
                  {project.title}
                </h2>
                {project.details.role && (
                  <p className="text-blue-500 text-xs tracking-widest mt-1">
                    {project.details.role}
                  </p>
                )}
              </div>

              <button
                onClick={onClose}
                aria-label="Close panel"
                className="mt-1 ml-4 shrink-0 w-9 h-9 flex items-center justify-center border border-neutral-700 text-neutral-400 hover:border-white hover:text-white transition-colors duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 1l12 12M13 1L1 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div
              className="flex-1 overflow-y-auto px-6 sm:px-8 py-7 space-y-8 [&::-webkit-scrollbar]:w-0.75 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-neutral-700 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-neutral-500"
              style={{ scrollbarWidth: "thin", scrollbarColor: "#404040 transparent" }}
            >
              <div className="min-h-30">
                <p className="text-[10px] tracking-[0.22em] text-neutral-600 uppercase mb-3">
                  About
                </p>
                <p className="text-neutral-400 text-[14px] sm:text-[15px] leading-[1.9] whitespace-pre-line">
                  {displayedText}
                  {isTyping && (
                    <span className="inline-block w-0.5 h-[1em] bg-neutral-400 ml-0.5 align-middle animate-pulse" />
                  )}
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
              >
                <p className="text-[10px] tracking-[0.22em] text-neutral-600 uppercase mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.details.techStack.map((t) => (
                    <span
                      key={t}
                      className="text-[12px] text-neutral-400 border border-neutral-700 px-3 py-1 hover:border-neutral-500 transition-colors duration-150"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>

              {project.details.highlights && (
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <p className="text-[10px] tracking-[0.22em] text-neutral-600 uppercase mb-3">
                    Key Highlights
                  </p>
                  <div className="space-y-2">
                    {project.details.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-3">
                        <span className="mt-2 w-1 h-1 bg-neutral-600 rounded-full shrink-0" />
                        <p className="text-neutral-400 text-[13px] sm:text-[14px] leading-relaxed">
                          {h}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            <div className="px-6 sm:px-8 py-6 border-t border-neutral-800 shrink-0 flex flex-col sm:flex-row gap-3">
              <Link
                href={project.details.liveLink}
                target="_blank"
                className="flex items-center justify-between flex-1 px-5 py-4 bg-white text-black text-sm font-medium tracking-wide hover:bg-neutral-200 transition-colors duration-200 group"
              >
                <span>View Live Project</span>
                <MdOutlineArrowOutward className="text-lg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>

              {project.details.githubLink && (
                <Link
                  href={project.details.githubLink}
                  target="_blank"
                  className="flex items-center justify-between flex-1 px-5 py-4 border border-neutral-700 text-neutral-300 text-sm font-medium tracking-wide hover:border-white hover:text-white transition-colors duration-200 group"
                >
                  <span>View on GitHub</span>
                  <FiGithub className="text-lg group-hover:scale-110 transition-transform duration-200" />
                </Link>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const leftItem: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const rightItem: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function ProjectBlock({
  project,
  index,
  onViewDetails,
}: {
  project: Project;
  index: number;
  onViewDetails: (p: Project) => void;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.3 }}
      className="grid lg:grid-cols-2 border border-neutral-700 border-b-0 border-r-0 border-l-0 py-10 gap-16 lg:px-20 px-5 items-center"
    >
      <motion.div
        variants={isEven ? leftItem : rightItem}
        className="flex flex-col justify-between h-full"
      >
        <div>
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
            className="pt-5 pb-3 text-neutral-500 lg:text-[17px] text-[20px] max-w-85 lg:max-w-120"
          >
            {project.description}
          </motion.p>

          {project.highlights && (
            <motion.div>
              {project.highlights.map((point) => (
                <div key={point} className="flex items-center py-1 gap-3">
                  <span className="w-1 h-1 bg-white rounded-full" />
                  <p className="text-neutral-500 lg:text-[13px] text-[17px]">
                    {point}
                  </p>
                </div>
              ))}
            </motion.div>
          )}

          <motion.div className="flex flex-wrap mb-8">
            {project.tech.map((tech) => (
              <p
                key={tech}
                className="text-neutral-500 px-2 py-2 lg:text-[13px] text-[15px] border border-neutral-700"
              >
                {tech}
              </p>
            ))}
          </motion.div>
        </div>

        <motion.div className="mt-10 flex flex-wrap gap-3">
          <Link
            href={project.link}
            target="_blank"
            className="inline-block px-8 py-4 bg-neutral-700 text-white font-medium hover:bg-neutral-800 hover:scale-105 transition transform duration-300 ease-in-out"
          >
            View Project
          </Link>

          <button
            onClick={() => onViewDetails(project)}
            className="inline-block px-8 py-4 border border-neutral-600 text-neutral-300 font-medium hover:border-white hover:text-white hover:scale-105 transition transform duration-300 ease-in-out bg-transparent cursor-pointer"
          >
            View Details
          </button>
        </motion.div>
      </motion.div>

      <motion.div variants={isEven ? rightItem : leftItem}>
        <Link
          href={project.link}
          target="_blank"
          className="group relative block w-full overflow-hidden cursor-pointer"
        >
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            width={800}
            height={600}
            className="w-full h-auto transform transition duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2" />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-60 transition-opacity duration-500 ease-in-out" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
            <div className="bg-white/80 px-6 py-4 rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition duration-300">
              <span className="text-black text-2xl font-bold">
                <MdOutlineArrowOutward />
              </span>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.section>
  );
}

export default function ProjectsPreview() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="w-full py-24 space-y-40">
        <div>
          <p className="text-neutral-500 tracking-[0.2em] lg:text-xl text-sm mb-20 lg:px-20 px-5">
            FEATURED PROJECTS
          </p>
          <div className="space-y-2">
            {featuredProjects.map((project, index) => (
              <ProjectBlock
                key={project.title}
                project={project}
                index={index}
                onViewDetails={setActiveProject}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="text-neutral-500 tracking-[0.2em] text-sm mb-20 lg:px-20 px-5">
            INTERNSHIP EXPERIENCE
          </p>
          <div className="space-y-2">
            {internshipProjects.map((project, index) => (
              <ProjectBlock
                key={project.title}
                project={project}
                index={index}
                onViewDetails={setActiveProject}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectDetailDrawer
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
}