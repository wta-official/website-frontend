"use client";
import Carousel from "@/components/custome-ui/Carousel";
import Hero from "@/components/custome-ui/Hero";
import Image from "next/image";
import Link from "next/link";
import { talents } from "@/data/data";
import Head from "next/head";
import { motion } from "framer-motion";
import FAQ from "@/components/custome-ui/FAQ";
import News from "@/components/custome-ui/News";

const Homepage: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <>
      <Head>
        <title>The Working Talent Agency (WTA) - Home</title>
        <meta
          name="description"
          content="Welcome to the realm of The Working Talent Agency (WTA), where Africa’s brightest stars find their home. Explore our talents, services, and latest news!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#151515] text-gray-200 w-full">
        {/* Hero Section */}
        <Hero />

        {/* Welcome Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
          className="relative bg-black py-16 sm:py-24 flex flex-col justify-center items-center"
        >
          <div className="absolute inset-0 opacity-10 flex items-center justify-center">
            <Carousel>
              <p className="leading-[10vw] m-0 text-white text-[8vw] text-center">
                WORKING TALENT AGENCY
              </p>
            </Carousel>
          </div>
          <div className="relative z-10 text-center space-y-4 px-4">
            <h1 className="text-3xl sm:text-5xl leading-snug sm:leading-tight">
              <span className="opacity-50 block">Welcome to the vibrant</span>
              <span className="block">realm of The Working</span>
              <span className="block">Talent Agency (WTA)</span>
            </h1>
            <p className="text-lg sm:text-2xl font-semibold mt-4">
              Where Africa’s brightest stars find their home.
            </p>
          </div>
        </motion.section>

        {/* Highlight Image */}
        <div className="relative w-full h-[300px] sm:h-[500px] lg:h-[600px]">
          <Image
            src="/images/image1.png"
            alt="Welcome Banner"
            layout="fill"
            objectFit="cover"
            priority
            className="rounded-md"
          />
        </div>

        {/* Talents Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={staggerContainer}
          className="bg-[#151515] px-4 sm:px-10 lg:px-20 py-10 sm:py-16 lg:py-24 text-white"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 sm:mb-0">
              Our Talents
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

        {/* Services Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={staggerContainer}
          className="bg-[#151515] px-4 sm:px-10 lg:px-20 pb-16 sm:pb-24 lg:pb-32 text-white"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 sm:mb-0">
              Our Services
            </h2>
            <Link
              href="/services"
              className="border border-white rounded-full px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl hover:bg-white hover:text-black transition-all"
            >
              See Our Services
            </Link>
          </div>
          <div className="space-y-8">
            {[
              { title: "Representation", number: "01" },
              { title: "Public Relations", number: "02" },
              { title: "Career Development", number: "03" },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="flex justify-between border-b border-gray-600 pb-4"
              >
                <h3 className="text-lg sm:text-2xl">{service.title}</h3>
                <span className="font-bold text-lg sm:text-2xl">
                  {service.number}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Highlight Image */}
        <div className="relative w-full h-[300px] sm:h-[500px] lg:h-[600px]">
          <Image
            src="/images/image2.png"
            alt="Services Banner"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>

        {/* Latest News Section */}
        <News />

        {/* FAQ Section */}
        <div className="pb-10 sm:pb-20 lg:pb-32">
          <FAQ />
        </div>
      </main>
    </>
  );
};

export default Homepage;
