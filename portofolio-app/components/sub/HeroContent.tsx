'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const HeroContent = () => {
  return (
  <motion.div 
    initial="hidden"
    animate="visible"
    className="flex flex-col md:flex-row items-center justify-center 
              px-4 sm:px-6 md:px-12 lg:px-24 mt-32 md:mt-40 w-full z-[20] gap-10"
  >
    {/* Bagian kiri */}
    <div className="h-full w-full flex flex-col gap-5 justify-center text-start">
      {/* Kotak Welcome */}
      <div className="relative top-[90px] sm:top-[80px] md:top-[40px] lg:top-[30px] flex flex-col">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-2 px-3 border border-[#7042f88b] opacity-90 flex items-center w-max "
        >
          <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">My Portofolio</h1>
        </motion.div>

        {/* Judul utama */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-[600px]"
        >
          <span>
            Student developer
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}building web{" "}
            </span>
            projects with curiosity
          </span>
        </motion.div>

        {/* Paragraf */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm sm:text-base md:text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Software Engineering student with a passion for web development. I enjoy learning by building simple and user-friendly projects.
        </motion.p>

        {/* Tombol Download */}
        <motion.a
          href="/cv-mitha.pdf"
          target="_blank"
          rel="noopener noreferrer"
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Download CV
        </motion.a>
      </div>
      
    </div>

    {/* Bagian kanan (gambar icon) */}
    <motion.div
      variants={slideInFromRight(0.8)}
      className="w-full h-full flex justify-center items-center"
    >
      <div className="relative top-20 sm:top-8 md:top-10 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[650px] xl:h-[650px]">
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          fill
          style={{ objectFit: 'contain' }}
          sizes="(max-width: 768px) 250px, (max-width: 1200px) 400px, 650px"
        />
      </div>
    </motion.div>
  </motion.div>
  );
};

export default HeroContent;