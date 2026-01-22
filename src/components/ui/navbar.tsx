"use client";

import { ThemeToggle } from "./theme-toggle";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
        <motion.div
          className="cursor-pointer relative w-24 h-10 sm:w-32 sm:h-12 lg:w-40 lg:h-16"
          whileHover={{ scale: 1.05 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {mounted && (
            <Image
              src={theme === "dark" ? "/logos/embun-dark.png" : "/logos/embun-light.png"}
              alt="embun logo"
              fill
              className="object-contain"
              priority
            />
          )}
        </motion.div>

        <div className="flex items-center gap-2 sm:gap-4 lg:gap-8">
          <button
            onClick={() => scrollToSection("competencies")}
            className="text-xs sm:text-sm lg:text-base font-medium hover:text-yellow-500 transition-colors"
          >
            Competencies
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-xs sm:text-sm lg:text-base font-medium hover:text-yellow-500 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("certificates")}
            className="text-xs sm:text-sm lg:text-base font-medium hover:text-yellow-500 transition-colors"
          >
            Certificates
          </button>

          <ThemeToggle />

          {/* Button "Contact Me" hilang di mobile, muncul di tablet keatas */}
          <a
            href="https://www.linkedin.com/in/embun-nawang-sari"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-4 lg:px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:opacity-80 transition-opacity text-sm lg:text-base"
          >
            Contact Me
          </a>
        </div>
      </div>
    </motion.nav>
  );
}