'use client';

import React from 'react';
import GithubIcon from '@/public/images/gitwhite.png';
import Instagram from '@/public/images/instagram.svg';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const EmailSection = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, subject, message }),
      });

      const result = await res.json();

      if (res.ok) {
        alert("Email terkirim!");
      } else {
        alert("Gagal mengirim email: " + result.error?.message || "Unknown error");
      }
    } catch (err) {
      alert("Terjadi kesalahan jaringan");
    }
  };

  return (
    <motion.section
      id="contact"
      className="relative z-[38] py-24 px-4 sm:px-8 md:px-16 lg:px-32"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="absolute -bottom-70 -left-14 transform -translate-x-1/2 -translate-1/2
        h-80 w-80 rounded-full blur-lg z-[36]
        bg-[radial-gradient(circle_at_center,_#59168B_0%,_transparent_70%)]">
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Kiri - Teks & Icon */}
        <motion.div
          className="z-[37]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h5 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">Let's Contact Me</h5>
          <p className="text-[#ADB7BE] mb-6 max-w-md">
            I'm currently looking for new opportunities. My inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best 
            to get back to you!
          </p>

          <div className="socials flex flex-row gap-3">
            <Link href="https://github.com/mithayuliantari" target="_blank">
              <Image 
                className='hover:scale-110 transition-transform'
                src={GithubIcon} alt="Github Icon" width={30} height={30} 
              />
            </Link>
            <Link href="https://www.instagram.com/my__tha06?igsh=MmlieHpicXZvOWIx" target="_blank">
              <Image 
                className='hover:scale-110 transition-transform'
                src={Instagram} alt="Instagram Icon" width={30} height={30} 
              />
            </Link>
          </div>
        </motion.div>

        {/* Kanan - Form */}
        <motion.div
          className="z-[40]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="mitchu@gmail.com"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]
                  text-gray-100 text-sm rounded-lg w-full p-2.5"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                placeholder="Just saying hi"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]
                  text-gray-100 text-sm rounded-lg w-full p-2.5"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                placeholder="Let's talk about...."
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]
                  text-gray-100 text-sm rounded-lg w-full p-2.5"
              />
            </div>

            <button
              type="submit"
              className="button-primary text-white font-medium py-2.5 px-5 rounded-lg w-full cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EmailSection;
