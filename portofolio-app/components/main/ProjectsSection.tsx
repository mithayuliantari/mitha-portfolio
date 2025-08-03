'use client';

import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { slideInFromTop } from '@/utils/motion';

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "A collaborative team project developed using React.js.",
    image: "/images/projects/project2.png",
    gitUrl: "/",
    previewUrl: "https://web-profile-tkj.netlify.app"
  },
  {
    id: 2,
    title: "Project 2",
    description: "A simple landing page designed with Bootstrap, currently optimized for desktop.",
    image: "/images/projects/project3.png",
    gitUrl: "https://github.com/mithayuliantari/Saffari-Ville",
    previewUrl: "https://safari-ville.netlify.app"
  },
  {
    id: 3,
    title: "Project 3",
    description: "A personal portfolio site built using Next.js and Tailwind CSS.",
    image: "/images/projects/project4.png",
    gitUrl: "https://github.com/mithayuliantari/mitha-portfolio",
    previewUrl: "https://mitha-portfolio-ten.vercel.app"
  },
  {
    id: 4,
    title: "Project 4",
    description: "A simple landing page built with HTML and CSS.",
    image: "/images/projects/project1.png",
    gitUrl: "https://github.com/mithayuliantari/Forest-Nest",
    previewUrl: "https://forestnest.netlify.app"
  },

];

const ProjectsSection = () => {
  return (
    <div id="projects" className="z-[35] py-12 px-4 sm:px-6 lg:px-8 md:mb-8">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          variants={slideInFromTop}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mt-4 mb-12"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
