"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Navigation Links */}
          <div className="flex items-center gap-1 sm:gap-3 md:gap-6 flex-1">
            <button
              onClick={() => scrollToSection("competencies")}
              className="text-xs sm:text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-500 transition-colors px-1 sm:px-2 py-1 whitespace-nowrap"
            >
              Competencies
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-xs sm:text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-500 transition-colors px-1 sm:px-2 py-1 whitespace-nowrap"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("certificates")}
              className="text-xs sm:text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-500 transition-colors px-1 sm:px-2 py-1 whitespace-nowrap"
            >
              Certificates
            </button>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-1.5 sm:p-2 rounded-lg border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-yellow-500 transition-all flex-shrink-0 ml-2"
            aria-label="Toggle theme"
          >
            {mounted && (
              theme === "dark" ? (
                <FiSun className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <FiMoon className="w-4 h-4 sm:w-5 sm:h-5" />
              )
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}