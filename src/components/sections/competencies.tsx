"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Skill {
  id: number;
  name: string;
  description: string;
  icon: string;
  category: string;
}

const skillLogos: Record<string, string> = {
  'HTML': '/logos/html.png',
  'CSS': '/logos/css.png',
  'JavaScript': '/logos/javascript.png',
  'React': '/logos/react.png',      
  'Next.js': '/logos/nextjs.png',
  'Python': '/logos/python.png',
  'Flask': '/logos/flask.png',
  'Laravel': '/logos/laravel.png',
  'MySQL': '/logos/mysql.png',
  'PostgreSQL': '/logos/postgresql.png',
  'Power BI': '/logos/powerbi.png',
  'Tableau': '/logos/tableau.png',
  'Flutter': '/logos/flutter.png',
  'Git': '/logos/git.png',          
}

export function Competencies() {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    fetch("/api/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <section id="competencies" className="py-12 md:py-20 relative overflow-hidden">
      {/* Background hitam - full width di mobile, rounded di desktop */}
      <div className="absolute inset-0 bg-black dark:bg-gray-950 
                      md:rounded-[60px] lg:rounded-[80px] 
                      md:mx-8"></div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            Skills & Stack
          </h2>
          <p className="text-base md:text-lg text-gray-400 dark:text-gray-400 leading-relaxed">
            Skills forged through hands-on development, data exploration, and building solutions that make a difference.
          </p>
        </motion.div>

        {/* Grid responsive: 1 col di mobile, 2 di tablet, 3-5 di desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-gray-900 
                         p-4 md:p-6 
                         rounded-xl 
                         border-2 border-gray-200 dark:border-gray-800 
                         hover:border-yellow-500 
                         transition-all cursor-pointer"
            >
              <div className="h-12 md:h-16 mb-3 md:mb-4 flex items-center justify-center">
                <img
                  src={skillLogos[skill.name] || "/logos/default.png"}
                  alt={skill.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-black dark:text-white">
                {skill.name}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}