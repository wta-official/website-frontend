"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative hero-gif text-white flex flex-col justify-center px-20 z-10" /* Ensure it’s behind the header */
      aria-labelledby="hero-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <h1
          id="hero-heading"
          className="text-4xl md:text-6xl lg:text-[84px] font-extralight leading-tight md:leading-[1.2]"
        >
          Discover the <br />
          <span className="font-bold">Future's Icons Today</span>
        </h1>
      </motion.div>

      <motion.p
        className="mt-6 text-lg md:text-2xl leading-7 md:leading-10 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
      >
        Welcome to{" "}
        <span className="font-semibold">The Working Talent Agency</span>, your
        gateway to the stars of the future.
      </motion.p>
    </section>
  );
};

export default Hero;
