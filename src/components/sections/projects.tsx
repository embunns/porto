"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string;
  category: string;
  url: string | null;
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const categories = ["All", "Software Engineering", "Data Analytics", "AI/ML"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Work That Matters
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            From data dashboards to mobile apps—here's where code meets impact, and ideas turn into solutions.

          </p>

          {/* Filter Buttons */}
          <div className="flex gap-4 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full border-2 font-semibold transition-all ${
                  filter === cat
                    ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white"
                    : "border-gray-300 dark:border-gray-700 hover:border-yellow-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-800 hover:border-yellow-500 hover:shadow-2xl transition-all cursor-pointer group"
            >
              <div className="relative h-48 bg-gradient-to-br from-yellow-400 to-orange-500">
                 <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
            
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                  {project.title[0]}
                </div>
                
                {/* Source Code Button */}
                <a
                  href={project.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 p-3 bg-black/70 hover:bg-black rounded-lg transition-all opacity-0 group-hover:opacity-100"
                  onClick={(e: React.MouseEvent) => e.stopPropagation()}
                >
                  <FaGithub className="w-5 h-5 text-white" />
                </a>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-xs font-bold text-gray-500 dark:text-gray-500 mb-2 uppercase tracking-wide">
                    Technology Used:
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.technologies.split(", ").map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}