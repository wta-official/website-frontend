"use client"


import { talents } from '@/data/data';
import { motion } from 'framer-motion'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const TalentsDisplay = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      };
  return (
    <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    variants={staggerContainer}
    className="bg-[#151515] px-4 sm:px-10 lg:px-20 py-10 sm:py-16 lg:py-24 text-white"
  >
    <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 sm:mb-0">
        Talents
      </h2>
      <Link
        href="/talents"
        className="border border-white rounded-full px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl hover:bg-white hover:text-black transition-all"
      >
        See Our Talents
      </Link>
    </div>
    <motion.div
      variants={staggerContainer}
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
    >
      {talents.map((talent, index) => (
        <motion.div key={index} variants={fadeIn}>
          <Image
            src={talent}
            alt={`Talent ${index + 1}`}
            width={300}
            height={300}
            className="object-cover rounded-md w-full h-full"
          />
        </motion.div>
      ))}
    </motion.div>
  </motion.section>
  )
}

export default TalentsDisplay