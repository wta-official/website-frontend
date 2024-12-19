"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative hero-gif text-white flex flex-col justify-center px-4 sm:px-8 md:px-16 z-10 max-h-[600px] min-h-[300px] lg:min-h-[500px]"
      aria-labelledby="hero-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <h1
          id="hero-heading"
          className="text-lg sm:text-xl md:text-3xl font-extralight leading-snug md:leading-tight text-center sm:text-left"
        >
          Discover the <br />
          <span className="font-bold">{"Future's"} Icons Today</span>
        </h1>
      </motion.div>

      <motion.p
        className="mt-4 text-sm sm:text-base md:text-lg leading-5 sm:leading-6 md:leading-8 max-w-full sm:max-w-2xl text-center sm:text-left"
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
