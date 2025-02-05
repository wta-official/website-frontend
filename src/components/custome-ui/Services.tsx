"use client"

import { motion } from "framer-motion";

const Services = () => {
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
    className="bg-[#151515] px-4 sm:px-10 lg:px-20 pb-16 sm:pb-24 lg:pb-32 text-white"
  >
    <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 sm:mb-0">
        Services
      </h2>
      {/* <Link
        href="/services"
        className="border border-white rounded-full px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl hover:bg-white hover:text-black transition-all"
      >
        See Our Services
      </Link> */}
    </div>
    <div className="space-y-8">
      {[
        { title: "Talent Representation and Management ", number: "01" },
        { title: "Brand Partnerships and Endorsements", number: "02" },
        { title: "Career Development", number: "03" },
        { title: "Creative Industry Consulting ", number: "04" },
        { title: "Marketing & Communications", number: "05" },
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
  )
}

export default Services