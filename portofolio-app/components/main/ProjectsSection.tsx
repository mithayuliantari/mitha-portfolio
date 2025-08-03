'use client';

import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { slideInFromTop } from '@/utils/motion';

const projectsData = [
  {
    id: 1,
    title: "Landing Page",
    description: "Project 1",
    image: "/images/projects/project1.png",
    gitUrl: "/",
    previewUrl: "https://forestnest.netlify.app"
  },
  {
    id: 2,
    title: "Landing Page 1",
    description: "Project 2",
    image: "/images/projects/project2.png",
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 3,
    title: "Landing Page 2",
    description: "Project 3",
    image: "/images/projects/project3.png",
    gitUrl: "/",
    previewUrl: "/"
  },
  // {
  //   id: 4,
  //   title: "Landing Page 3",
  //   description: "Project 4",
  //   image: "/images/projects/project4.jpg",
  //   gitUrl: "/",
  //   previewUrl: "/"
  // },
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
