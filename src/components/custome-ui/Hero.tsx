"use client";

import { motion } from "framer-motion";
import Images from "./Images";

const Hero = () => {
  // Common animation settings
  const animations = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: "easeInOut" },
  };

  return (
    <Images imageUrl={"/gif/heroGif.gif"}>
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
            Discover the <br />
            <span className="font-bold">{"Future's"} Icons Today</span>
          </h1>
        </motion.div>

        {/* Animated Subtitle */}
        <motion.p
          className="mt-6 text-lg md:text-2xl leading-6 sm:leading-8 max-w-full sm:max-w-2xl text-center sm:text-left"
          {...animations}
          transition={{ ...animations.transition, delay: 0.3 }}
        >
          Welcome to{" "}
          <span className="font-semibold">The Working Talent Agency</span>, your
          gateway to the stars of the future.
        </motion.p>
      </section>
    </Images>
  );
};

export default Hero;
