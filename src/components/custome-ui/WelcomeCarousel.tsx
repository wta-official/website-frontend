"use client"

import { motion } from "framer-motion";
import Carousel from "./Carousel";


const WelcomeCarousel = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
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
          <div className="relative z-10 text-center space-y-4 px-4 opacity-0">
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

  )
}

export default WelcomeCarousel