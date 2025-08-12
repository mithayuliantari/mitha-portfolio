'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center text-center'>
      <motion.div
        variants={slideInFromTop}
        className='Welcome-box py-2 px-3 border border-[#7042f88b] opacity-90 flex items-center w-max'
      >
        <SparklesIcon className='text-[#b49bff] mr-2 h-5 w-5' />
        <h1 className='Welcome-text text-sm'>Crafted with passion & code</h1>
      </motion.div>

      <motion.h2
        variants={slideInFromLeft(0.5)}
        className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold mt-4'
      >
        Making Apps with Technologies
      </motion.h2>

      <motion.p
        variants={slideInFromRight(0.5)}
        className='cursive text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mt-4'
      >
        Never miss a task, deadline or idea
      </motion.p>
    </div>
  )
}

export default SkillText
