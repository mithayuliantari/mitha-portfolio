'use client';

import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { slideInFromTop, slideInFromLeft, slideInFromRight } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Tailwind CSS</li>
        <li>UI/UX Design (Basic)</li>
        <li>Laravel (Basic)</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4">
        <li>SMK NEGERI 1 DENPASAR - Software Engineering (2023-Present)</li>
        <li>SMP NEGERI 2 KUTA (2020-2023)</li>
      </ul>
    )
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-4">
        <li>Internship at ASANKA (December 2024 - March 2025)</li>
      </ul>
    )
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tab: string) => {
    startTransition(() => {
      setTab(tab);
    });
  };

  return (
    <section id="about-me" className="text-white z-[25] py-12 px-4 md:mb-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Gambar dengan animasi slide dari kiri */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/images/mitha.jpg"
            alt="About section image"
            width={400}
            height={400}
            className="rounded-lg w-full max-w-[400px] h-auto"
          />
        </motion.div>

        {/* Konten teks dengan animasi slide dari kanan */}
        <motion.div
          variants={slideInFromRight(0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-left flex flex-col h-full"
        >
          <motion.div
            variants={slideInFromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="Welcome-box flex items-center py-2 px-3 border border-[#7042f88b] opacity-[0.9] mb-4 w-max"
          >
            <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
            <h1 className="Welcome-text text-sm">Who I Am</h1>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            About Me
          </h2>

          <p className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-[550px]">
            I am a student at SMK Negeri 1 Denpasar majoring in Software Engineering. I have built several simple projects using HTML, CSS, and JavaScript. Although I am still learning, I am highly motivated to improve my skills and gain more experience in programming. I enjoy solving problems, learning from others, and working both independently and as part of a team. Currently, I am doing an internship to deepen my understanding of real-world development practices.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>

          <div className="mt-6">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
