"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { slideInFromTop } from "@/utils/motion";

const outerLogos = [
  { src: "/images/skill-logo/css.png", alt: "CSS", size: 80 },
  { src: "/images/skill-logo/html.png", alt: "HTML", size: 70 },
  { src: "/images/skill-logo/js.png", alt: "JS", size: 60 },
  { src: "/images/skill-logo/tailwind.png", alt: "Tailwind", size: 70 },
  { src: "/images/skill-logo/laravel.png", alt: "Laravel", size: 65 },
  { src: "/images/skill-logo/wordpress.png", alt: "Wordpress", size: 70 },
  { src: "/images/skill-logo/mysql.png", alt: "MySQL", size: 70 },
];

const innerLogos = [
  { src: "/images/skill-logo/react.png", alt: "React", size: 50 },
  { src: "/images/skill-logo/figma.png", alt: "Figma", size: 30 },
  { src: "/images/skill-logo/nextjs.png", alt: "Next.js", size: 50 },
  { src: "/images/skill-logo/gitblack.png", alt: "GitHub", size: 70 },
  { src: "/images/skill-logo/php.png", alt: "PHP", size: 50 },
];

export default function CircleLayout() {
  const [rotationOuter, setRotationOuter] = useState(0);
  const [rotationInner, setRotationInner] = useState(0);
  const [radiusOuter, setRadiusOuter] = useState(500);
  const [radiusInner, setRadiusInner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationOuter((prev) => prev + 0.003);
      setRotationInner((prev) => prev - 0.005);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const r = Math.min(window.innerWidth, window.innerHeight) / 3;
      setRadiusOuter(r * 1.1);
      setRadiusInner(r * 0.45);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const center = 250;

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 mt-0 mb-16 sm:mb-20 md:mb-24 lg:mb-28 text-white z-[25]">
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="Welcome-box flex items-center py-2 px-3 border border-[#7042f88b] opacity-[0.9] mb-4 w-max"
      >
        <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
        <h1 className="Welcome-text text-sm">My Skills</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="hidden md:block relative w-[500px] h-[500px] mt-16"
      >
        <div className="hidden md:block relative w-[500px] h-[500px] mt-16">
          {outerLogos.map((logo, index) => {
            const angle = (index / outerLogos.length) * 2 * Math.PI + rotationOuter;
            const x = Math.cos(angle) * radiusOuter + center;
            const y = Math.sin(angle) * radiusOuter + center;

            return (
              <div
                key={index}
                className="absolute w-[120px] h-[120px] rounded-[10px] overflow-hidden"
                style={{ top: y, left: x, transform: "translate(-50%, -50%)" }}
              >
                <div
                  className="absolute inset-0 z-0
                  before:content-['']
                  before:absolute
                  before:inset-[-50%]
                  before:bg-[conic-gradient(transparent,transparent,#00a6ff)]
                  before:animate-[spin_5s_linear_infinite]"
                ></div>

                <div className="absolute inset-[5px] rounded-[10px] bg-white flex items-center justify-center 
                shadow-[inset_10px_10px_10px_#4b1fb8] z-10">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.size}
                    height={logo.size}
                    className="object-contain"
                  />
                </div>
              </div>
            );
          })}

          {innerLogos.map((logo, index) => {
            const angle = (index / innerLogos.length) * 2 * Math.PI + rotationInner;
            const x = Math.cos(angle) * radiusInner + center;
            const y = Math.sin(angle) * radiusInner + center;

            return (
              <div
                key={`inner-${index}`}
                className="absolute w-[90px] h-[90px] rounded-[10px] overflow-hidden"
                style={{ top: y, left: x, transform: "translate(-50%, -50%)" }}
              >
                <div
                  className="absolute inset-0 z-0
                  before:content-['']
                  before:absolute
                  before:inset-[-50%]
                  before:bg-[conic-gradient(#00a6ff,transparent,transparent)]
                  before:animate-[spin-reverse_5s_linear_infinite]"
                ></div>

                <div className="absolute inset-[5px] rounded-[10px] bg-white flex items-center justify-center 
                shadow-[inset_8px_8px_8px_#4b1fb8] z-10">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.size}
                    height={logo.size}
                    className="object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>      
      </motion.div>
    </section>
  );
}