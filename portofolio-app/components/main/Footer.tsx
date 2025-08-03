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
      className='z-[42] footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white'
    >
      <div className='container p-12 flex justify-between'>
        <span>Junior Web Developer</span>
        <p className='text-slate-400'>All right reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
