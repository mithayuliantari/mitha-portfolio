"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

type Blog = {
  id: number;
  title: string;
  description: string;
  image: string | null;
  link: string | null;
};


export default function BlogSection({ blogs }: { blogs: Blog[] }) {
  return (
    <section id="blog" className="w-full z-[39]">
      {/* Judul */}
      <motion.h2
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-12 text-white"
      >
        Blog & Articles
      </motion.h2>

      {/* Card Blog */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
        <motion.div
          key={blog.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.03,
            transition: { type: "tween", duration: 0.3, ease: "easeOut" }
          }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-[#0f1724] border border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg flex flex-col"
        >

            {blog.image ? (
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gray-800 flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}

            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">
                {blog.title}
              </h3>
              <p className="text-[#ADB7BE] text-sm md:text-base flex-1">
                {blog.description}
              </p>
              <div className="mt-4">
                {blog.link ? (
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Read More →
                  </a>
                ) : (
                  <span className="text-sm text-gray-400">No external link</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
