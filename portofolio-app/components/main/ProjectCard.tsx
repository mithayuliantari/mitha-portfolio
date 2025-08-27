'use client';

import React, { useState } from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
  index?: number;
}

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  index = 0,
}: ProjectCardProps) => {
  const [showIcons, setShowIcons] = useState(false);

  const handleToggleIcons = () => {
    if (window.innerWidth <= 1024) {
      setShowIcons(!showIcons);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col w-full"
    >
      <div
        onClick={handleToggleIcons}
        className="h-45 md:h-48 lg:h-50 rounded-t-xl relative group overflow-hidden cursor-pointer"
      >
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-center group-hover:scale-110 transition duration-500"
        />

        <div
          className={`absolute top-0 left-0 w-full h-full z-[30] bg-black/80
            ${showIcons ? 'flex' : 'hidden'} group-hover:flex
            items-center justify-center transition-all duration-500`}
        >
          <a
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white"
            onClick={(e) => e.stopPropagation()} 
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover:text-white" />
          </a>

          <a
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white"
            onClick={(e) => e.stopPropagation()}
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover:text-white" />
          </a>
        </div>
      </div>

      <div className="text-white rounded-b-xl mt-3 bg-[#3c087e]/10 backdrop-blur-sm border border-[#3c087e]/30 py-6 px-4">
        <h5 className="text-lg md:text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] text-sm md:text-base">{description}</p>

        <button
          onClick={() => window.location.href = `/project/${title.toLowerCase().replace(/\s+/g, '-')}`}
          className="mt-4 px-4 py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Project Detail
        </button>
      </div>

      
    </motion.div>
  );
};

export default ProjectCard;
