"use client";
import Founder from "@/components/custome-ui/Founder";
import History from "@/components/custome-ui/History";
import MissionAndVision from "@/components/custome-ui/MissionAndVision";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="bg-[#151515]">
      <section
        className="relative bg-[url('/images/aboutUsHero.png')] bg-cover w-full min-h-[1024px] flex items-end justify-start px-6 md:px-20 text-white z-10"
        aria-labelledby="about-hero-heading"
      >
        <motion.div
          initial={{ opacity: 0, y: 1 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="text-center"
        >
          <h1
            id="about-hero-heading"
            className="text-4xl md:text-6xl lg:text-[84px] font-extralight leading-tight md:leading-[1.2] shadow-md mb-48"
          >
            About Us
          </h1>
        </motion.div>
      </section>

      <div className="text-white flex px-20 py-28 space-x-20 bg-[#131313]">
            <h1 className="text-6xl leading-[80px]">Where Talent Meets Opportunity</h1>
            <p className="text-2xl leading-[71px] text-gray-300">Welcome to Working Talent Agency, where we believe in the power of talent to transform and inspire. Our agency is dedicated to discovering, nurturing, and representing exceptional individuals in the fields of acting, music, and modeling. With a deep commitment to excellence, we connect our talent with unparalleled opportunities that elevate their careers to new heights.  At Working Talent Agency, we’re reshaping the landscape of talent management in Nigeria. Grounded in a steadfast commitment to excellence and fueled by passion for cultivating potential, we specialize in discovering, nurturing and propelling the most promising stars to the forefront.</p>
        </div>
        
        <History />

        <Image
          src="/images/about/image2.png"
          alt="Services Banner"
          width={1440}
          height={1000}
          className="w-full h-auto"
        />
        
        <Founder />

        <MissionAndVision />
    </main>
  );
};

export default AboutPage;
