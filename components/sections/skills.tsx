"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function Skills() {
  const skills = [
    {
      title: "Next.js",
      icon: "/home/nextjs.jpeg",
    },
    {
      title: "React",
      icon: "/home/react.png",
    },
    {
      title: "Framer Motion",
      icon: "/home/framer.webp",
    },
    {
      title: "Tailwind CSS",
      icon: "/home/tailwind.webp",
    },
    {
      title: "Javascript",
      icon: "/home/js.jpeg",
    },
    {
      title: "Typescript",
      icon: "/home/ts.svg",
    },
    {
      title: "REST API's",
      icon: "/home/api2.jpg",
    },
    {
      title: "Git & GitHub",
      icon: "/home/git.webp",
    },
    {
      title: "Vercel",
      icon: "/home/vercel.png",
    },
    {
      title: "HTML",
      icon: "/home/html.jpg",
    },
    {
      title: "Vanilla CSS",
      icon: "/home/css.png",
    },
    {
      title: "responsive UI",
      icon: "/home/phone.png",
    },
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
      className="text-white bg-neutral-900/30 lg:min-h-screen h-[90vh] flex flex-col justify-center"
    >
      <motion.p
        variants={item}
        className="pl-5 lg:pl-16 lg:pb-20 pb-10 lg:text-[28px] text-[18px] tracking-widest font-light text-neutral-500"
      >
        CAPABILITIES
      </motion.p>

      <motion.div
        variants={container}
        className="grid lg:grid-cols-4 grid-cols-2 gap-1 mx-auto"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.title}
            variants={item}
            whileHover={{ scale: 1.04 }}
            viewport={{ amount: 0.3 }}
            className="bg-black flex gap-3 justify-center items-center lg:px-17 lg:py-10 px-7 py-5 hover:bg-neutral-800 transition-colors duration-300"
          >
            <p className="lg:text-[19px] text-[13px] font-light text-gray-300 cursor-default">
              {skill.title}
            </p>
            <Image
              className="lg:w-10 w-7"
              width={400}
              height={400}
              alt="skill image"
              src={skill.icon}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
