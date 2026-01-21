"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image"; // ✅ Import Next.js Image

interface Certificate {
  id: number;
  title: string;
  organization: string;
  year: string;
  description: string;
  image: string;
  url?: string | null;
}

export function Certificates() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const res = await fetch("/api/certificates");
        const data = await res.json();

        if (Array.isArray(data)) {
          setCertificates(data);
        } else if (Array.isArray(data.certificates)) {
          setCertificates(data.certificates);
        } else {
          console.error("Invalid certificates response:", data);
          setCertificates([]);
        }
      } catch (error) {
        console.error("Failed to fetch certificates:", error);
        setCertificates([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  if (loading) {
    return (
      <section className="py-20 text-center text-gray-500">
        Loading certificates...
      </section>
    );
  }

  return (
    <section id="certificates" className="py-20 px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Certificates</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Proof of my commitment to learning and developing skills in technology, data, and AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 border-transparent hover:border-yellow-500 group"
            >
              {/* ✅ TAMBAHKAN IMAGE DI SINI */}
              <div className="relative h-64 bg-gradient-to-br from-gray-300 to-gray-500 dark:from-gray-700 dark:to-gray-900 overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    console.error('Failed to load image:', cert.image);
                    // Fallback ke emoji jika gambar gagal load
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Fallback emoji jika gambar tidak ada */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-8xl font-bold opacity-10 pointer-events-none">
                  📜
                </div>

                {/* View Certificate Button */}
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 p-3 bg-black/70 hover:bg-black rounded-lg transition-all opacity-0 group-hover:opacity-100 z-10"
                  >
                    <FaExternalLinkAlt className="w-4 h-4 text-white" />
                  </a>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-sm font-bold text-yellow-500 mb-2">
                  {cert.organization} | {cert.year}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}