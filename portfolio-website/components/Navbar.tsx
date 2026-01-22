"use client";

import { motion, Variants } from "framer-motion";

export default function Navbar() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.18 } },
  };

  const items: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      variants={container}
      initial="hidden"
      whileInView="show"
      className="flex justify-between fixed top-0 left-0 right-0 z-50 items-center lg:px-10 px-3 py-6 backdrop-blur"
    >
      <button
        onClick={() => scrollToSection("hero")}
        className="text-white cursor-pointer font-bold tracking-widest"
      >
        DELITECH
      </button>

      <motion.div variants={container} className="flex gap-5 items-center">
        <motion.div variants={items}>
          <button
            onClick={() => scrollToSection("about")}
            className="text-neutral-500 text-[14px] cursor-pointer hover:text-white transition"
          >
            About
          </button>
        </motion.div>

        <motion.div variants={items}>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-neutral-500 text-[14px] cursor-pointer hover:text-white transition"
          >
            Projects
          </button>
        </motion.div>

        <motion.div variants={items}>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-neutral-500 text-[14px] cursor-pointer hover:text-white transition"
          >
            Contact
          </button>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
}
