"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { CalendarIcon } from "@heroicons/react/24/outline";

type Blog = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  image: string | null;
  created_at: string;
  category?: { name: string; slug: string };
  tags?: { name: string; slug: string }[];
};

export default function BlogSection({ blogs }: { blogs: Blog[] }) {
  const limited = blogs.slice(0, 5);

  return (
    <section
      id="blog"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 mt-10 sm:mt-12 md:mt-16 lg:mt-20 mb-16 sm:mb-20 md:mb-24 lg:mb-28 text-white z-[39]"
    >
      <motion.h2
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-12"
      >
        Blog & Articles
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
        {limited.map((blog, index) => {
          let spanClass = "";

          if (index === 3) {
            spanClass = "lg:col-span-2";
          }

          return (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 220, damping: 20 },
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-b from-[#1a1330] backdrop-blur-xl border border-[#2a1b4d] rounded-xl overflow-hidden shadow-md hover:shadow-lg flex flex-col will-change-transform ${spanClass}`}
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
                <div className="flex items-center text-gray-400 text-sm mb-2">
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  {new Date(blog.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>

                <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">
                  {blog.title}
                </h3>
                <p className="text-[#ADB7BE] text-sm md:text-base flex-1">
                  {blog.excerpt ?? ""}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {blog.tags?.map((tag) => (
                    <span
                      key={tag.slug}
                      className="welcome-box border border-[#7042f88b] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 text-sm px-2 py-1 rounded"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <Link
                    href={`/blogs/${blog.slug}`}
                    prefetch
                    className="text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <button
          onClick={() => (window.location.href = "/blogs")}
          className="py-4 px-10 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          All Blogs →
        </button>
      </div>
    </section>
  );
}
