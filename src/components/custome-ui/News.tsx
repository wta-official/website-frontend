"use client";

import React from "react";

import HorizontalScroll from "./HorizontalScroll";
import { motion } from "framer-motion";
import { latestNewsFeeds } from "@/data/data";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const News: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={staggerContainer}
      className="p-6 sm:p-8 lg:p-16 text-white"
    >
      <h2 className="text-2xl lg:text-4xl leading-tight mb-6 sm:mb-0 font-bold">
        In the news
      </h2>
      {/* <h3 className="text-2xl lg:text-4xl leading-tight mb-6 sm:mb-0">
      In the news
      </h3> */}

      <HorizontalScroll>
        {latestNewsFeeds.map((newsFeed, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            className="max-w-[calc(75%-1rem)] sm:max-w-[calc(50%-1rem)] lg:max-w-[calc(35%-1rem)] flex-shrink-0 snap-start overflow-hidden"
          >
            <Link href="/">
              <Image
                src={newsFeed.image}
                alt={newsFeed.title}
                width={400} // Reduced width for mobile
                height={250} // Adjusted height for consistency
                className="w-full object-cover rounded-md"
              />
              <div className="p-3 sm:p-4 space-y-4 sm:space-y-6">
                <h4 className="text-lg md:text-xl lg:2xl mb-2">
                  {newsFeed.title}
                </h4>
                <span className="flex items-center space-x-1 sm:space-x-2 text-lg sm:text-xl hover:underline">
                  <span>Read more</span> <ArrowRight />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </HorizontalScroll>
    </motion.section>
  );
};

export default News;
