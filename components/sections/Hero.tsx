"use client";

import { ArrowUpRight } from "lucide-react";
import Navbar from "../Navbar";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.22,
        ease: "easeOut",
      },
    },
  };

  const items: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: "easeOut",
      },
    },
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header id="hero" className="h-screen relative overflow-hidden">
      <Navbar />

      <section className="flex items-center justify-center text-center lg:pt-20 pt-10 relative z-10">
        <motion.div
          variants={container}
          viewport={{ amount: 0.2 }}
          initial="hidden"
          whileInView="show"
          className="text-white lg:px-20 px-5 my-auto place-content-center h-[87vh] flex flex-col"
        >
          <motion.p
            variants={items}
            className="text-neutral-500 font-light tracking-widest"
          >
            FRONT-END DEVELOPER
          </motion.p>

          <motion.h1
            variants={items}
            className="lg:text-[130px] text-[70px] font-light"
          >
            DELITECH
          </motion.h1>

          <motion.p
            variants={items}
            className="text-neutral-500 lg:text-2xl text-[21px] font-light pt-5 max-w-150"
          >
            Building expressive, motion-driven, high-performance web interfaces
          </motion.p>

          <motion.div className="flex gap-6 justify-center items-center py-10">
            <motion.button
              onClick={() => scrollToSection("projects")}
              variants={items}
              className="lg:px-5 px-5 py-4 border border-white overflow-hidden group relative cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2 text-sm tracking-wider">
                VIEW WORK
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
              </span>
            </motion.button>

            <motion.button
              variants={items}
              onClick={() => scrollToSection("contact")}
              className="lg:px-10 px-5 py-4 border hover:border-neutral-600 transition-colors duration-500 cursor-pointer border-neutral-800"
            >
              CONTACT
            </motion.button>
          </motion.div>
        </motion.div>

        <div className="absolute top-70 lg:right-70 right-10 w-200 h-200 rounded-full bg-blue-50/8 blur-3xl pointer-events-none" />
      </section>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-20 bg-linear-to-b from-white/40 to-transparent" />
      </div>
    </header>
  );
}
