"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const principles = [
  {
    number: "01",
    keyword: "Simple.",
    full: "Keep interfaces intuitive and simple.",
    aside: "Complexity is a design failure, not a feature.",
    align: "left",
  },
  {
    number: "02",
    keyword: "Intentional.",
    full: "Use motion to guide the user, not distract.",
    aside: "Every animation must earn its place.",
    align: "right",
  },
  {
    number: "03",
    keyword: "Responsive.",
    full: "Design for every screen without compromise.",
    aside: "The layout bends — the experience doesn't.",
    align: "left",
  },
  {
    number: "04",
    keyword: "Accessible.",
    full: "Prioritize clarity and access unconditionally.",
    aside: "Good UI works for everyone, always.",
    align: "right",
  },
];

export default function UXPhilosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);

  return (
    <section
      ref={sectionRef}
      id="ux-philosophy"
      className="relative py-28 sm:py-40 px-5 sm:px-10 lg:px-20"
    >
  
      <motion.p
        style={{ y: bgY }}
        aria-hidden
        className="
          pointer-events-none select-none
          absolute top-16 sm:top-10 left-1/2 -translate-x-1/2
          text-[22vw] font-black uppercase leading-none
          text-neutral-900 whitespace-nowrap tracking-tighter
          overflow-hidden
        "
      >
        Design
      </motion.p>

      <div className="relative max-w-5xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-[10px] tracking-[0.35em] text-neutral-600 uppercase mb-6"
        >
          Motion &amp; UX
        </motion.p>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-20 sm:mb-28"
        >
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-light text-white leading-[1.05] tracking-tight">
            How I think
            <br />
            <span className="text-neutral-600">about interfaces.</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.25 }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className={`
                group relative flex flex-col
                ${p.align === "right" ? "items-end text-right" : "items-start text-left"}
                border-t border-neutral-800 py-10 sm:py-14
                last:border-b last:border-neutral-800
              `}
            >
              <div className={`flex items-baseline gap-4 sm:gap-6 ${p.align === "right" ? "flex-row-reverse" : "flex-row"}`}>
                <span className="text-[11px] tracking-[0.2em] text-neutral-700 shrink-0 tabular-nums">
                  {p.number}
                </span>
                <p className="text-neutral-500 text-[13px] sm:text-[14px] leading-relaxed">
                  {p.full}
                </p>
              </div>

              <motion.h3
                initial={{ x: p.align === "right" ? 30 : -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ amount: 0.4 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="
                  mt-3
                  text-[11vw] sm:text-[8vw] lg:text-[6.5vw]
                  font-semibold leading-none tracking-tight
                  text-white group-hover:text-neutral-300
                  transition-colors duration-300
                "
              >
                {p.keyword}
              </motion.h3>

              <p className="mt-3 text-[11px] sm:text-[12px] tracking-widest uppercase text-neutral-700 group-hover:text-neutral-500 transition-colors duration-300">
                {p.aside}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-24 sm:mt-32"
        >
          <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-neutral-600 leading-snug max-w-2xl">
            Every interaction should feel{" "}
            <em className="text-white not-italic">natural</em>,{" "}
            <em className="text-white not-italic">engaging</em>, and{" "}
            <em className="text-white not-italic">purposeful</em>.
          </p>
          <p className="mt-4 text-[11px] tracking-[0.3em] text-neutral-700 uppercase">
            — Design principle
          </p>
        </motion.div>

      </div>
    </section>
  );
}