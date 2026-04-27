"use client";

import { motion, Variants } from "framer-motion";

export default function Skills() {
  const skills = [
    "Next.js",
    "React",
    "Framer Motion",
    "Tailwind Css",
    "Javascript",
    "Typescript",
    "REST APIs",
    "Git & GitHub",
    "Vercel",
    "HTML",
    "Vanilla CSS",
    "Responsive UI",
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="text-white bg-neutral-900/30 min-h-screen flex flex-col justify-center"
    >
      <motion.p
        variants={item}
        className="pl-5 lg:pl-16 pb-20 text-[14px] tracking-widest font-light text-neutral-500"
      >
        CAPABILITIES
      </motion.p>

      <motion.div
        variants={container}
        className="grid lg:grid-cols-4 grid-cols-2 gap-1 mx-auto"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill}
            variants={item}
            whileHover={{ scale: 1.04 }}
            viewport={{ amount: 0.3 }}
            className="bg-black flex justify-center items-center lg:px-24 lg:py-10 px-12 py-5 hover:bg-neutral-800 transition-colors duration-300"
          >
            <p className="lg:text-[19px] text-[13px] font-light text-gray-300 cursor-default">
              {skill}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
