'use client';

import { motion } from 'framer-motion';
import Images from './Images';

const Hero = () => {
  // Common animation settings
  const animations = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: 'easeInOut' },
  };

  return (
    <div>
      <Images imageUrl={'/images/talents/heroTalent.png'}>
        <section
          className="relative flex flex-col justify-center px-4 sm:px-8 md:px-16 z-10 text-white"
          aria-labelledby="hero-heading"
          aria-label="Hero Section"
        >
          {/* Animated Heading */}
          <motion.div {...animations}>
            <h1
              id="hero-heading"
              className="text-center sm:text-left text-3xl md:text-5xl font-light leading-snug md:leading-tight"
            >
              Working Talent
              <br />
              <span className="font-bold">make us tick. </span>
            </h1>
          </motion.div>

          {/* Animated Subtitle */}
          <motion.p
            className="mt-6 text-lg md:text-2xl leading-6 sm:leading-8 max-w-full sm:max-w-2xl text-center sm:text-left"
            {...animations}
            transition={{ ...animations.transition, delay: 0.3 }}
          >
            Welcome to{' '}
            <span className="font-semibold">The Working Talent Agency</span>
          </motion.p>

          <motion.p
            className="mt-6 text-lg md:text-2xl leading-6 sm:leading-8 max-w-full sm:max-w-2xl text-center sm:text-left"
            {...animations}
            transition={{ ...animations.transition, delay: 0.3 }}
          >
            Where Africa's brightest stars find their home.
          </motion.p>
        </section>
      </Images>
    </div>
  );
};

export default Hero;
