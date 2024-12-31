"use client";
import Founder from "@/components/custome-ui/Founder";
import History from "@/components/custome-ui/History";
import MissionAndVision from "@/components/custome-ui/MissionAndVision";
import { motion } from "framer-motion";
import Image from "next/image";
import Expandable from "../custome-ui/Expandable";

const About = () => {

  return (
    <main className="bg-[#151515]">
      {/* Hero Section */}
      <section
        className="bg-[url('/images/aboutUsHero.png')] bg-cover bg-top w-full min-h-[300px] md:min-h-[500px] lg:min-h-[800px] flex items-center md:items-end justify-center md:justify-start px-4 md:px-12 lg:px-20 text-white z-10"
        aria-labelledby="about-hero-heading"
      >
        <motion.div
          initial={{ opacity: 0, y: 1 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="text-center md:text-left"
        >
          <h1
            id="about-hero-heading"
            className="text-2xl md:text-4xl lg:text-6xl font-light shadow-lg mb-12 md:mb-20"
          >
            About Us
          </h1>
        </motion.div>
      </section>

      {/* Intro Section */}

      <Expandable
        title="Where Talent Meets Opportunity"
        firstPart=" Welcome to Working Talent Agency, where we believe in the power of
            talent to transform and inspire. Our agency is dedicated to
            discovering, nurturing, and representing exceptional individuals in
            the fields of acting, music, and modeling."
        expandedPart="  With a deep commitment to excellence, we connect our talent with
                unparalleled opportunities that elevate their careers to new
                heights. At Working Talent Agency, we’re reshaping the landscape
                of talent management in Nigeria. Grounded in a steadfast
                commitment to excellence and fueled by passion for cultivating
                potential, we specialize in discovering, nurturing, and
                propelling the most promising stars to the forefront."
      />

      {/* History Section */}
      <History />

      {/* Image Section */}
      <div className="relative w-full h-[300px] sm:h-[500px] lg:h-[600px]">

      <Image
        src="/images/about/image2.png"
        alt="Services Banner"
        fill
        className="rounded-md object-cover"
      />
      </div>

      {/* Founder Section */}
      <Founder />

      {/* Mission & Vision Section */}
      <MissionAndVision />

      <div className="mt-20 bg-[url('/images/about/image1.png')] bg-cover bg-center w-full min-h-[300px] md:min-h-[500px] lg:min-h-[800px] flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between py-6 md:py-10 px-4 md:px-12 lg:px-20 text-white">
        <p className="text-lg md:text-xl">Ikoyi, Lagos Island</p>
        <p className="text-sm md:text-lg">48, Awolowo Road, Ikoyi Lagos</p>
      </div>
    </main>
  );
};

export default About;
