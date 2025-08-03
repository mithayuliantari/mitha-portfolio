'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromTop } from '@/utils/motion'
import Image from 'next/image'

const Encryption = () => {
  return (
    <div className='relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen flex flex-col items-center justify-center py-6 mb-8 sm:mb-6 lg:mb-2'>

      {/* Judul di atas */}
      <motion.div 
        variants={slideInFromTop}
        className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold z-20 mt-4 sm:mt-10 text-center mb-10 sm:mb-8 md:mb-6 lg:mb-4'
      >
        Performance
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-inherit'> & </span>
        Security
      </motion.div>

      {/* Konten Tengah */}
      <div className='flex flex-col items-center justify-center grow z-20 text-center'>

        {/* Gembok + Label */}
        <div className='flex flex-col items-center group mt-8 sm:mt-4 md:mt-2 lg:md-0'>
          <div className='relative flex flex-col items-center'>
            <Image 
              src="/LockTop.png"
              alt="Lock Top Icon"
              width={60}
              height={60}
              className='w-10 sm:w-12 md:w-14 lg:w-16 translate-y-2 sm:translate-y-4 transition-all duration-300 group-hover:-translate-y-11'
            />
            <Image 
              src="/LockMain.png"
              alt="Lock Main Icon"
              width={80}
              height={80}
              className='w-14 sm:w-16 md:w-20 lg:w-24 z-10'
            />
          </div>

          <div className='Welcome-box px-4 py-2 border border-[#7042f88b] opacity-[0.9] mt-6'>
            <h1 className='Welcome-text text-[12px]'>Encryption</h1>
          </div>
        </div>

        {/* Deskripsi */}
        <div className='mt-20 sm:mt-28 md:mt-15 lg:mt-40 px-4 max-w-xl'>
          <p className='cursive text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300'>
            Secure your data with end-to-end encryption
          </p>
        </div>
      </div>

      {/* Background Video */}
      <div className='absolute inset-0 z-[-1] overflow-hidden'>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload='false'
          className='w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-full object-cover'
          src="/encryption.webm"
        />
      </div>
    </div>
  )
}

export default Encryption
