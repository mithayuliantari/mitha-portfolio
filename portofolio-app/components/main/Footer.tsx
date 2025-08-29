'use client';

import React from 'react';
import { motion } from 'framer-motion';

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Footer = () => {
  return (
    <motion.footer
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="z-[42] footer border-t border-[#33353F] text-white mt-10 sm:mt-12 md:mt-14 lg:mt-18"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <span className="text-base sm:text-lg font-semibold tracking-wide">
          Mitha Yuliantari
        </span>
        <p className="text-sm sm:text-base text-slate-400">
          All rights reserved © {new Date().getFullYear()}
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;