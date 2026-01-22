"use client";

import { motion } from "framer-motion";

const principles = [
  "Keep interfaces intuitive and simple.",
  "Use motion to guide the user, not distract.",
  "Design for responsiveness across devices.",
  "Prioritize accessibility and clarity.",
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function UXPhilosophy() {
  return (
    <section
      id="ux-philosophy"
      className="py-32 px-6 md:px-12 bg-neutral-900/10"
    >
      <div className="max-w-250 mx-auto text-center">
        <motion.h2
          variants={item}
          className="text-3xl text-white md:text-4xl font-bold mb-12"
        >
          Motion & UX Philosophy
        </motion.h2>
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          className="space-y-6 text-center md:text-center"
        >
          {principles.map((p, index) => (
            <motion.li
              key={index}
              variants={item}
              className="text-gray-300 text-[16px] md:text-xl"
            >
              • {p}
            </motion.li>
          ))}
        </motion.ul>
        <motion.p variants={item} className="mt-12 text-gray-400 italic">
          Every interaction should feel natural, engaging, and purposeful.
        </motion.p>
      </div>
    </section>
  );
}
