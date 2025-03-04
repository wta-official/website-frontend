'use client';
import Founder from '@/components/custome-ui/Founder';
// import History from "@/components/custome-ui/History";
import MissionAndVision from '@/components/custome-ui/MissionAndVision';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Expandable from '../custome-ui/Expandable';

const About = () => {
  return (
    <main className="bg-[#151515]">
      {/* Hero Section */}
      <section
        className="bg-[url('/images/founders/allfounders.jpg')] bg-cover bg-top w-full min-h-[400px] md:min-h-[700px] lg:max-h-screen flex items-center md:items-end justify-center md:justify-start px-4 md:px-12 lg:px-20 text-white z-10"
        aria-labelledby="about-hero-heading"
      >
        <motion.div
          initial={{ opacity: 0, y: 1 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
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
        title="We are the nexus of talent and opportunity"
        firstPart="Founded by three passionate partners - Demi Banwo, Adesegun Adetoro and Adeyemi Taiwo - with nearly 20 years of combined experience in the film and entertainment industry in Nigeria, Working Talent Agency believes strongly in the power of talent to transform and inspire popular culture. Our agency is the reputable go-to for discovering, nurturing, and representing exceptional individuals in show business."
        expandedPart="
With a deep commitment to career development, WTA clients are connected to unparalleled opportunities that advance their creative careers to the pinnacle. We represent talents who inspire culture and shape the creator economy. From artists to athletes and filmmakers, our expertise and comprehensive resources help talent and businesses thrive with confidence.

We are reshaping the future of talent management in Nigeria by forging meaningful partnerships with our clients to bring their ambitions to reality. Our approach goes beyond conventional representation—we immerse ourselves in their goals, combining their unique visions with our extensive industry knowledge to craft tailored strategies that deliver tangible, trusted results. Through this collaborative effort, we empower new and established stars to rise to prominence, equipping them with the resources, expertise, and opportunities they need to thrive. Together, we are building a new standard of excellence that drives careers forward and inspires lasting success."
      />

      {/* History Section */}
      {/* <History /> */}

      {/* Image Section */}
      <div className="relative w-full h-[300px] sm:h-[500px] lg:h-[600px]">
        <Image
          src="/images/about/wtaabout3.jpg"
          alt="Services Banner"
          fill
          className="rounded-md object-contain"
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
