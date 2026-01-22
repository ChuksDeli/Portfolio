"use client";

import { motion } from "framer-motion";

export default function AboutPreview() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        ease: "easeOut",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      variants={container}
      id="about"
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.25 }}
      className="max-w-5xl flex lg:flex-row lg:mx-auto flex-col lg:items-center px-4 lg:px-0 lg:justify-between gap-5 py-24 h-[90vh]"
    >
      <motion.div>
        <motion.h2
          variants={item}
          className="text-sm uppercase tracking-widest text-neutral-500 mb-4"
        >
          About Me
        </motion.h2>
      </motion.div>

      <motion.div className="max-w-150">
        <motion.p
          variants={item}
          className="text-lg font-light text-neutral-500 pt-5 leading-relaxed max-w-3xl"
        >
          I&apos;m Delight Chukwu, also known as Delitech. I build clean,
          expressive, and performant web interfaces.
        </motion.p>

        <motion.p
          variants={item}
          className="text-lg font-light text-neutral-500 pt-5 leading-relaxed max-w-3xl"
        >
          I&apos;ve worked on real-world products including a full-stack
          e-commerce platform, admin dashboards, and API-driven applications.
        </motion.p>

        <motion.p
          variants={item}
          className="text-lg font-light text-neutral-500 pt-5 leading-relaxed max-w-3xl"
        >
          I care deeply about structure, motion, and user experience.
        </motion.p>

        <motion.div variants={item} />
      </motion.div>
    </motion.section>
  );
}
