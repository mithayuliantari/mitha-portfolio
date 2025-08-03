import React from 'react';
import HeroContent from '../sub/HeroContent';

const Hero = () => {
  return (
    <div id = 'home' className='relative flex flex-col w-full mb-10 sm:mb-8'>
      <video
      autoPlay
      muted
      loop
      className="rotate-180 absolute top-[-240px] sm:top-[-250px] md:top-[-310px] lg:top-[-330px] left-0 z-[1] w-full h-full object-cover"
        >
            <source src='/blackhole.webm' type = 'video/webm' />
      </video>

      <HeroContent />
    
    </div>
  );
};

export default Hero;
