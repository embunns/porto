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
  'Python': '/logos/python.png',
  'Golang': '/logos/golang.png',
  'Flask': '/logos/flask.png',
  'Laravel': '/logos/laravel.png',
  'My SQL': '/logos/mysql.png',
  'Power BI': '/logos/powerbi.png',
  'Tableau': '/logos/tableau.png',
  'C++': '/logos/cpp.png',
  'Flutter': '/logos/flutter.png',
}

export function Competencies() {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    fetch("/api/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <section id="competencies" className="py-20 px-8 relative overflow-hidden">
      {/* Rounded Black Background */}
      <div className="absolute inset-0 bg-black dark:bg-gray-950 rounded-[80px] mx-8"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Competencies
          </h2>
          <p className="text-lg text-gray-600 dark:text-white-400 leading-relaxed">
            Key technical skills and competencies developed through projects, coursework, and hands-on experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-yellow-500 transition-all cursor-pointer"
            >
              <div className="relative w-16 h-16 mb-4">
                <Image
                  src={skillLogos[skill.name] || "/logos/default.png"}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}