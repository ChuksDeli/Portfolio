"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  MessageCircle,
  Music,
} from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 md:py-48 px-6 md:px-12 bg-neutral-900/30"
    >
      <div className="max-w-400 mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
        >
          <motion.div
            variants={item}
            className="text-xs tracking-[0.3em] text-neutral-500 mb-16"
          >
            GET IN TOUCH
          </motion.div>

          <motion.h2
            variants={item}
            className="text-5xl md:text-7xl font-light text-white mb-24 max-w-3xl leading-tight"
          >
            Lets build something meaningful.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-1 max-w-5xl mx-auto"
        >
          <motion.a
            variants={item}
            href="mailto:chukwudelight718@gmail.com"
            className="group bg-black p-10 md:p-12 text-white hover:bg-neutral-900 transition-colors duration-700 block"
          >
            <Mail className="mb-6 opacity-40 text-neutral-500 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="text-xs tracking-[0.2em] text-neutral-500 mb-2">
              EMAIL
            </div>
            <div className="text-sm text-neutral-300 font-light break-all">
              chukwudelight718@gmail.com
            </div>
          </motion.a>

          <motion.a
            variants={item}
            href="https://github.com/ChuksDeli"
            target="_blank"
            className="group bg-black p-10 md:p-12 hover:bg-neutral-900 transition-colors duration-700 block"
          >
            <Github className="mb-6 opacity-40 text-neutral-500 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="text-xs tracking-[0.2em] text-neutral-500 mb-2">
              GITHUB
            </div>
            <div className="text-sm text-neutral-300 font-light">
              @ChuksDeli
            </div>
          </motion.a>

          <motion.a
            variants={item}
            href="https://www.linkedin.com/in/delight-chukwu-b09895341?utm_source=share_via&ut/delight-chukwu-b09895341?utm_source=share_via&ut"
            target="_blank"
            className="group bg-black p-10 md:p-12 hover:bg-neutral-900 transition-colors duration-700 block"
          >
            <Linkedin className="mb-6 opacity-40 text-neutral-500 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="text-xs tracking-[0.2em] text-neutral-500 mb-2">
              LINKEDIN
            </div>
            <div className="text-sm text-neutral-300 font-light">Delitech</div>
          </motion.a>

          <motion.a
            variants={item}
            href="https://www.tiktok.com/@deli_tech?_r=1&_t=ZS-93Hfw0toahs"
            target="_blank"
            className="group bg-black p-10 md:p-12 hover:bg-neutral-900 transition-colors duration-700 block"
          >
            <Music className="mb-6 opacity-40 text-neutral-500 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="text-xs tracking-[0.2em] text-neutral-500 mb-2">
              TIKTOK
            </div>
            <div className="text-sm text-neutral-300 font-light">
              @deli_tech
            </div>
          </motion.a>

          <motion.a
            variants={item}
            href="https://www.instagram.com/delitechweb?igsh=azR2MDZ0bWJlZ2s="
            target="_blank"
            className="group bg-black p-10 md:p-12 hover:bg-neutral-900 transition-colors duration-700 block"
          >
            <Instagram className="mb-6 opacity-40 text-neutral-500 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="text-xs tracking-[0.2em] text-neutral-500 mb-2">
              INSTAGRAM
            </div>
            <div className="text-sm text-neutral-300 font-light">
              @delitechweb
            </div>
          </motion.a>

          <motion.a
            variants={item}
            href="https://wa.me/2347045960039"
            target="_blank"
            className="group bg-black p-10 md:p-12 hover:bg-neutral-900 transition-colors duration-700 block"
          >
            <MessageCircle className="mb-6 opacity-40 text-neutral-500 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="text-xs tracking-[0.2em] text-neutral-500 mb-2">
              WHATSAPP
            </div>
            <div className="text-sm text-neutral-300 font-light">
              Chat with me
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
