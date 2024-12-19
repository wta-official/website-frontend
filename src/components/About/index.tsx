"use client";
import Founder from "@/components/custome-ui/Founder";
import History from "@/components/custome-ui/History";
import MissionAndVision from "@/components/custome-ui/MissionAndVision";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <main className="bg-[#151515]">
      {/* Hero Section */}
      <section
        className="relative bg-[url('/images/aboutUsHero.png')] bg-cover bg-center w-full min-h-[400px] md:min-h-[700px] lg:min-h-[1024px] flex items-center md:items-end justify-center md:justify-start px-6 md:px-20 text-white z-10"
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
            className="text-3xl md:text-5xl lg:text-[84px] font-extralight leading-tight md:leading-[1.2] shadow-md mb-16 md:mb-48"
          >
            About Us
          </h1>
        </motion.div>
      </section>

      {/* Intro Section */}
      <div className="text-white flex flex-col md:flex-row px-6 md:px-20 py-12 md:py-28 space-y-4 md:space-y-0 md:space-x-20 bg-[#131313]">
        <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight md:leading-[80px]">
          Where Talent Meets Opportunity
        </h1>
        <div className="text-lg md:text-2xl leading-8 md:leading-[40px] text-gray-300">
          <p>
            Welcome to Working Talent Agency, where we believe in the power of
            talent to transform and inspire. Our agency is dedicated to
            discovering, nurturing, and representing exceptional individuals in
            the fields of acting, music, and modeling.{" "}
            {isExpanded && (
              <>
                With a deep commitment to excellence, we connect our talent with
                unparalleled opportunities that elevate their careers to new
                heights. At Working Talent Agency, we’re reshaping the landscape
                of talent management in Nigeria. Grounded in a steadfast
                commitment to excellence and fueled by passion for cultivating
                potential, we specialize in discovering, nurturing, and
                propelling the most promising stars to the forefront.
              </>
            )}
          </p>

          {/* Expand/Collapse Button */}
          <button
            onClick={toggleExpanded}
            className="mt-4 text-sm text-blue-500 underline"
            aria-expanded={isExpanded}
          >
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>

      {/* History Section */}
      <History />

      {/* Image Section */}
      <Image
        src="/images/about/image2.png"
        alt="Services Banner"
        width={1440}
        height={1000}
        className="w-full h-auto object-cover"
      />

      {/* Founder Section */}
      <Founder />

      {/* Mission & Vision Section */}
      <MissionAndVision />

      <div className="mt-20 bg-[url('/images/about/image1.png')] h-auto  bg-cover bg-center w-full min-h-[380px] md:min-h-[650px] lg:min-h-[920px] flex items-center md:items-end justify-start md:justify-between py-10 px-6 md:px-20 text-white z-10">
        <p className="text-2xl">Ikoyi, Lagos Island</p>
        <p className="text-lg">48, Awolowo Road, Ikoyi Lagos</p>
      </div>
    </main>
  );
};

export default About;
