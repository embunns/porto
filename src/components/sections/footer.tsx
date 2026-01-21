"use client";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Footer() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="bg-black dark:bg-gray-950 text-white py-12 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <div className="relative w-32 h-12 mb-4">
            {mounted && (
              <Image
                src={theme === "dark" ? "/logos/embun-dark.png" : "/logos/embun-dark.png"}
                alt="embun logo"
                fill
                className="object-contain"
              />
            )}
          </div>
          <div className="space-y-2 text-gray-400">
            <p className="font-medium">embunnawangsari@gmail.com</p>
            <p>Perumnas Bumi Telukjambe</p>
            <p>Karawang, Jawa Barat, Indonesia</p>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4">Categories</h4>
          <div className="space-y-2 text-gray-400">
            <p className="hover:text-yellow-500 cursor-pointer transition-colors">Programming</p>
            <p className="hover:text-yellow-500 cursor-pointer transition-colors">Projects</p>
            <p className="hover:text-yellow-500 cursor-pointer transition-colors">Organization</p>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4">More About me</h4>
          <div className="space-y-2 text-gray-400 mb-6">
            <p className="hover:text-yellow-500 cursor-pointer transition-colors">Introduction</p>
            <p className="hover:text-yellow-500 cursor-pointer transition-colors">Skills</p>
            <p className="hover:text-yellow-500 cursor-pointer transition-colors">Projects</p>
            <p className="hover:text-yellow-500 cursor-pointer transition-colors">Certificates</p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/embun-nawang-sari"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-yellow-500 rounded-lg transition-all"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/embunns"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-yellow-500 rounded-lg transition-all"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/embun_ns"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-yellow-500 rounded-lg transition-all"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p className="font-medium">© 2025 Embun Nawang Sari. All rights reserved.</p>
      </div>
    </footer>
  );
}