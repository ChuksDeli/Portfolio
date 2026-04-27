"use client";

import { motion, Variants } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import { useRef } from "react";

const skills = [
  "React", "Next.js", "TypeScript", "Tailwind CSS",
  "Framer Motion", "Node.js", "REST APIs", "Figma",
  "React", "Next.js", "TypeScript", "Tailwind CSS",
  "Framer Motion", "REST APIs",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};

export default function AboutPreview() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="py-24 sm:py-32 overflow-hidden">
      <div className="px-5 sm:px-10 lg:px-20 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-[10px] tracking-[0.35em] text-neutral-600 uppercase mb-8"
        >
          About Me
        </motion.p>

        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-0"
        >
          <h2 className="leading-[0.95] tracking-tight">
            <span className="block text-[13vw] sm:text-[11vw] lg:text-[9vw] font-black uppercase text-white">
              Delight
            </span>
            <span className="block text-[13vw] sm:text-[11vw] lg:text-[9vw] font-extralight uppercase text-neutral-600 -mt-1 sm:-mt-2">
              Chukwu
            </span>
          </h2>
        </motion.div>
      </div>

     
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative w-full border-t border-b border-neutral-800 py-4 my-12 sm:my-16"
      >
       
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-linear-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-linear-to-l from-black to-transparent z-10" />

        <div
          ref={marqueeRef}
          className="flex gap-0 animate-[marquee_22s_linear_infinite] w-max"
        >
          {skills.map((s, i) => (
            <span
              key={i}
              className="flex items-center gap-5 px-5 text-[11px] tracking-[0.22em] uppercase text-neutral-500 whitespace-nowrap"
            >
              {s}
              <span className="w-1 h-1 rounded-full bg-neutral-700 shrink-0" />
            </span>
          ))}
        </div>
      </motion.div>

      
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="px-5 sm:px-10 lg:px-20 max-w-5xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2px_1fr] gap-10 lg:gap-0">

        
          <motion.div variants={fadeUp} className="lg:pr-12 space-y-8">
            <div>
              <p className="text-[10px] tracking-[0.28em] text-neutral-700 uppercase mb-3">
                Identity
              </p>
              <div className="space-y-3">
                {[
                  { k: "Alias",    v: "Delitech" },
                  { k: "Role",     v: "Front-End Engineer" },
                  { k: "Focus",    v: "React · Next.js · Motion" },
                  { k: "Started",  v: "2023" },
                ].map(({ k, v }) => (
                  <div key={k} className="flex justify-between items-baseline border-b border-neutral-900 pb-2">
                    <span className="text-[11px] tracking-widest text-neutral-600 uppercase">{k}</span>
                    <span className="text-[13px] text-neutral-300 font-light">{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="/cv/Delight_Chukwu_CV_Updated.pdf"
              download
              className="
                group inline-flex items-center gap-4
                border border-neutral-700 px-5 py-4 w-full
                hover:border-white transition-colors duration-300
              "
            >
              <div className="flex-1">
                <span className="block text-[10px] tracking-[0.22em] text-neutral-600 uppercase mb-0.5">
                  Download
                </span>
                <span className="block text-sm text-white font-light">
                  Curriculum Vitae (CV)
                </span>
              </div>
              <div className="w-8 h-8 border border-neutral-700 flex items-center justify-center text-neutral-400 group-hover:border-white group-hover:text-white group-hover:translate-y-0.5 transition-all duration-300">
                <HiArrowDown className="text-sm" />
              </div>
            </a>
          </motion.div>

   
          <div className="hidden lg:block w-px bg-neutral-800 mx-auto" />

          <motion.div variants={fadeUp} className="lg:pl-12 flex flex-col justify-between gap-10">
            <div className="space-y-5">
              <p className="text-[10px] tracking-[0.28em] text-neutral-700 uppercase mb-3">
                Story
              </p>
              <p className="text-[15px] sm:text-[16px] font-light text-neutral-400 leading-[1.9]">
                I build clean, expressive, and performant web interfaces.
                I&apos;ve shipped real-world products — a full-stack e-commerce
                platform, an API-driven movie app, admin dashboards, and a
                shared expense tracker.
              </p>
              <p className="text-[15px] sm:text-[16px] font-light text-neutral-500 leading-[1.9]">
                I care about structure, motion, and the kind of detail that
                makes a user feel at home in an interface. Every pixel is
                deliberate. Every animation earns its place.
              </p>
            </div>


            <div className="border-l-2 border-neutral-700 pl-5">
              <p className="text-[14px] sm:text-[15px] italic text-neutral-500 leading-relaxed">
                &ldquo;Design is not just what it looks like. It&apos;s how it
                works — and how it feels.&rdquo;
              </p>
            </div>
          </motion.div>

        </div>
      </motion.div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

    </section>
  );
}
