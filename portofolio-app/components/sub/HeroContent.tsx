"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-center px-4 overflow-hidden z-[20] mt-10">
      <div className="absolute top-4 left-0 hidden sm:block">
        <Image
          src="/image-1.png"
          alt="API Illustration"
          width={800}
          height={800}
          className="w-[80px] sm:w-[120px] md:w-[160px] lg:w-[200px] object-contain float-anim"
        />
      </div>

      <div className="absolute top-4 right-0 hidden sm:block">
        <Image
          src="/image-2.png"
          alt="API Illustration"
          width={800}
          height={800}
          className="w-[80px] sm:w-[120px] md:w-[160px] lg:w-[200px] object-contain float-anim"
        />
      </div>

      <div className="relative z-10 max-w-3xl px-2 sm:px-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
          Curiosity-driven{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            web developer
          </span>{" "}
          building <br className="hidden sm:block" /> creative projects
        </h1>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
          I&apos;m passionate about web development and enjoy learning by creating simple, functional, and user-friendly projects.{" "}
          <br className="hidden sm:block" />
          I&apos;m always curious to explore new tools and frameworks to improve my skills.
        </p>
        <a
          href="/cv-mitha.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-6 sm:py-4 sm:px-10 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] inline-block text-sm sm:text-base"
        >
          Download CV
        </a>
      </div>

      <div className="absolute bottom-4 left-0 hidden sm:block">
        <Image
          src="/image-3.png"
          alt="API Illustration"
          width={800}
          height={800}
          className="w-[80px] sm:w-[120px] md:w-[160px] lg:w-[200px] object-contain zoom-anim"
        />
      </div>

      <div className="absolute bottom-4 right-0 hidden sm:block">
        <Image
          src="/image-4.png"
          alt="API Illustration"
          width={800}
          height={800}
          className="w-[80px] sm:w-[120px] md:w-[160px] lg:w-[200px] object-contain zoom-anim"
        />
      </div>
    </section>
  );
}