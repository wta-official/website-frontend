import '../globals.css'

import Aboutpage from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const About: React.FC = () => {
  return (
        <Aboutpage />
  );
};

export default About;