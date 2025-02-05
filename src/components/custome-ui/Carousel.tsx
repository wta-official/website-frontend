'use client';

import React from 'react';
import '../../../src/app/globals.css';

import { motion } from 'framer-motion';

const Carousel = ({ children }: { children: React.ReactNode }) => (
  <div className="malgods-font relative w-full overflow-hidden">
    <motion.div
      className="whitespace-nowrap"
      animate={{ x: ['100%', '-100%'] }}
      transition={{
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 15,
          ease: 'easeInOut',
        },
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </motion.div>
  </div>
);

export default Carousel;
