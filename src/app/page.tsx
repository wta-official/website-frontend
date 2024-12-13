"use client";
import Carousel from "@/components/custome-ui/Carousel";
import Hero from "@/components/custome-ui/Hero";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { latestNewsFeeds, talents } from "@/data/data";
import Head from "next/head";
import { motion } from "framer-motion";
import HorizontalScroll from "@/components/custome-ui/HorizontalScroll";
import FAQ from "@/components/custome-ui/FAQ";

const Home: React.FC = () => {
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

      <main className="bg-[#151515] text-gray-200">
        {/* Hero Section */}
        <Hero />

        {/* Welcome Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
          className="relative bg-black py-36 flex flex-col justify-center items-center"
        >
          <div className="absolute inset-0 opacity-10 flex items-center justify-center">
            <Carousel />
          </div>
          <div className="relative z-10 text-center space-y-6">
            <h1 className="text-6xl leading-[102px]">
              <span className="opacity-50 block">Welcome to the vibrant</span>
              <span className="block">realm of The Working</span>
              <span className="block">Talent Agency (WTA)</span>
            </h1>
            <p className="text-4xl font-semibold mt-8">
              Where Africa’s brightest stars find their home.
            </p>
          </div>
        </motion.section>

        {/* Highlight Image */}
        <Image
          src="/images/image1.png"
          alt="Welcome Banner"
          width={1440}
          height={1000}
          priority
          className="w-full h-auto"
        />

        {/* Talents Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={staggerContainer}
          className="bg-[#151515] px-20 py-32 text-white space-y-16"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-6xl leading-10">Our Talents</h2>
            <Link
              href="#"
              className="border border-white rounded-full px-10 py-4 text-xl hover:bg-white hover:text-black transition-all"
            >
              See Our Talents
            </Link>
          </div>
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {talents.map((talent, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Image
                  src={talent}
                  alt={`Talent ${index + 1}`}
                  width={300}
                  height={300}
                  className="object-cover rounded-md"
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
          className="bg-[#151515] px-20 pb-32 text-white space-y-16"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-6xl leading-10">Our Services</h2>
            <Link
              href="#"
              className="border border-white rounded-full px-10 py-4 text-xl hover:bg-white hover:text-black transition-all"
            >
              See Our Services
            </Link>
          </div>
          <div className="space-y-10">
            {[
              { title: "Representation", number: "01" },
              { title: "Public Relations", number: "02" },
              { title: "Career Development", number: "03" },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="flex justify-between border-b border-gray-600 w-full text-5xl pb-6"
              >
                <h3>{service.title}</h3>
                <span className="font-bold">{service.number}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Highlight Image */}
        <Image
          src="/images/image2.png"
          alt="Services Banner"
          width={1440}
          height={1000}
          className="w-full h-auto"
        />

        {/* Latest News Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={staggerContainer}
          className="py-32 px-20 text-white"
        >
          <h2 className="text-4xl font-light mb-4">In the Spotlight:</h2>
          <h3 className="text-5xl font-bold mb-8">Latest News & Highlights</h3>

          <HorizontalScroll>
            {latestNewsFeeds.map((newsFeed, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="max-w-[calc(50%-1rem)] flex-shrink-0 snap-start overflow-hidden"
              >
                <Link href="#">
                  <Image
                    src={newsFeed.image}
                    alt={newsFeed.title}
                    width={500}
                    height={300}
                    className="w-full object-cover rounded-md"
                  />
                  <div className="p-4 space-y-6">
                    <h4 className="text-3xl font-semibold mb-2">
                      {newsFeed.title}
                    </h4>
                    <Link
                      href="#"
                      className="flex items-center space-x-2 text-3xl hover:underline"
                    >
                      <span>Read more</span> <ArrowRight />
                    </Link>
                  </div>
                </Link>
              </motion.div>
            ))}
          </HorizontalScroll>
        </motion.section>

        <div className="pb-32">
          <FAQ />
        </div>
      </main>
    </>
  );
};

export default Home;
