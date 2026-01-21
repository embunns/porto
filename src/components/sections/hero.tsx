"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 pt-20 overflow-hidden">
      {/* Lanyard Image - Positioned at top left corner */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-16 md:left-32 lg:left-40 w-96 h-[576px] md:w-[512px] md:h-[768px] lg:w-[640px] lg:h-[1000px] z-10"
      >
        {mounted && (
          <div className="relative w-full h-full">
            <Image
              src={theme === "dark" ? "/logos/lanyard-dark.png" : "/logos/lanyard-dark.png"}
              alt="lanyard"
              fill
              className="object-contain object-top"
              priority
              quality={200}
              sizes="(max-width: 768px) 384px, (max-width: 1024px) 512px, 640px"
              unoptimized={false}
            />
          </div>
        )}
      </motion.div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Content - Positioned on the right side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="ml-auto max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-yellow-500">Embun Nawang Sari</span>
          </h1>

          <div className="flex gap-4 mb-6">
            <a
              href="https://www.linkedin.com/in/embun-nawang-sari"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-yellow-500 transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/embunns"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-yellow-500 transition-all"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/embun_ns"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-yellow-500 transition-all"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            I'm student of{" "}
            <span className="text-yellow-500 font-semibold">
              Telkom University
            </span>{" "}
            majoring in Informatics. Experienced in social and many
            Committee/Organization. I'm Adaptable, Problem Solver, Creative,
            Critical Thinker and Dreamer.
          </p>
        </motion.div>
      </div>
    </section>
  );
}