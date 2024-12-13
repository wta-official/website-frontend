"use client";
import "../../../src/app/globals.css";

import { motion } from "framer-motion";

const Carousel = () => (
    <div className="malgods-font relative w-full overflow-hidden">
      <motion.div
        className="whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          x: { repeat: Infinity, repeatType: "loop", duration: 15, ease: "easeInOut" },
        }}
      >
        <motion.p
          className="leading-[326px] m-0 text-white text-[279px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{ fontFamily: "Malgods-Bohemian" }}
        >
          WORKING TALENT AGENCY
        </motion.p>
      </motion.div>
    </div>
  );

export default Carousel;
