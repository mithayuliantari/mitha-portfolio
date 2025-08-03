'use client';

import { useState } from 'react';
import { Socials } from '@/constants';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full fixed top-0 z-[100] bg-[#03001417] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50 px-4 sm:px-6 md:px-10 overflow-x-hidden'>
      <div className='max-w-7xl mx-auto h-[65px] flex items-center justify-between'>

        {/* Logo */}
        <a href="#home" className='flex items-center'>
          <Image 
            src="/images/nav-logo.png"
            alt="Logo"
            width={40}
            height={40}
            className='cursor-pointer hover:animate-slowspin'
          />
          <span 
          id='#home'
          className='ml-2 font-bold text-gray-300 hidden md:block'>Junior Web Developer</span>
        </a>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-5'>
          <div className='flex gap-20 px-6 py-2 rounded-full bg-[#0300145e] border border-[#7042f861] text-gray-200'>
            <a href="#about-me" className='hover:text-[#7042f8]'>About Me</a>
            <a href="#skills" className='hover:text-[#7042f8]'>Skills</a>
            <a href="#projects" className='hover:text-[#7042f8]'>Projects</a>
          </div>
        </div>

        {/* Social Icons (selalu tampil) */}
        <div className='hidden md:flex flex-row gap-4 '>
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.a}
              target='_blank'
              rel='noopener noreferrer'
            >
            <Image
              key={social.name}
              src={social.src}
              alt={social.name}
              width={24}
              height={24}
              className='hover:scale-110 transition-transform'
            />
          </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className='md:hidden flex items-center'>
          <button onClick={() => setIsOpen(!isOpen)} className='text-white'>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d={isOpen
                  ? "M6 18L18 6M6 6l12 12" // X icon
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger
                } />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden flex flex-col items-center gap-4 py-4 text-gray-200 bg-[#0e0a1c]/80'>
          <a href="#about-me" onClick={() => setIsOpen(false)} className='hover:text-[#7042f8]'>About Me</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className='hover:text-[#7042f8]'>Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className='hover:text-[#7042f8]'>Projects</a>
          <div className="flex gap-3 pt-2">
            {Socials.map((social) => (
              <Image
                key={social.name}
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className='hover:scale-110 transition-transform'
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
