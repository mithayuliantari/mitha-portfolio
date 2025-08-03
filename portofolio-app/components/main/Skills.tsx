import { Skill_data } from '@/constants'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

const Skills = () => {
  return (
    <section 
      id='skills'
      className='relative flex flex-col items-center justify-center gap-10 px-4 sm:px-6 md:px-12 lg:px-24 py-28 mt-32 mb-2 md:mb-10 lg:mb-18'
    >
      {/* Teks Judul */}
      <SkillText />

      {/* Icon Skill */}
      <div className='flex flex-wrap justify-center gap-8 z-[10]'>
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      {/* Background Video */}
      <div className='absolute inset-0 -z-10 opacity-30 pointer-events-none'>
        <video
          className='w-full h-full object-cover'
          preload='false'
          playsInline
          loop
          muted
          autoPlay
          src='cards-video.webm'
        />
      </div>
    </section>
  )
}

export default Skills
