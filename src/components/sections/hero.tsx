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
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 pt-20 pb-20 md:pb-0 overflow-hidden">
      {/* Lanyard Image - Positioned to the left on mobile, larger on desktop */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 
                   left-8
                   sm:left-12
                   md:left-16 
                   lg:left-32 
                   xl:left-40 
                   w-[480px] h-[720px]
                   sm:w-[560px] sm:h-[840px]
                   md:w-96 md:h-[576px] 
                   lg:w-[512px] lg:h-[768px] 
                   xl:w-[640px] xl:h-[1000px] 
                   z-10"
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
              sizes="(max-width: 640px) 480px, (max-width: 768px) 560px, (max-width: 1024px) 384px, (max-width: 1280px) 512px, 640px"
              unoptimized={false}
            />
          </div>
        )}
      </motion.div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Content - Positioned below lanyard on mobile, right side on desktop */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="ml-auto max-w-full md:max-w-2xl 
                     mt-[400px] sm:mt-[400px] md:mt-0
                     px-4 md:px-0"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Hi, I'm <span className="text-yellow-500">Embun Nawang Sari</span>
          </h1>

          <div className="flex gap-3 md:gap-4 mb-4 md:mb-6 relative z-30">
            <a
              href="https://www.linkedin.com/in/embun-nawang-sari"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 md:p-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-yellow-500 transition-all relative z-30"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a
              href="https://github.com/embunns"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 md:p-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-yellow-500 transition-all relative z-30"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a
              href="https://instagram.com/embun_ns"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 md:p-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-yellow-500 transition-all relative z-30"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>

          <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6 md:mb-0">
            I'm studying{" "}
            <span className="text-yellow-500 font-semibold">
              Informatics
            </span>{" "}
            and I'm all about building things that work and matter. Whether it's{" "}
            <span className="text-yellow-500 font-semibold">
              crunching data
            </span>{" "}
            into actionable insights or{" "}
            <span className="text-yellow-500 font-semibold">
              developing full-stack applications
            </span>
            , I love the challenge of solving real problems with code. Beyond the tech stack, I'm active in campus leadership and always looking for the next project to dive into.
          </p>
        </motion.div>
      </div>
    </section>
  );
}