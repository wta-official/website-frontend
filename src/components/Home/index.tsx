import Hero from "@/components/custome-ui/Hero";
import Image from "next/image";
// import FAQ from "@/components/custome-ui/FAQ";
import News from "@/components/custome-ui/News";
import WelcomeCarousel from "../custome-ui/WelcomeCarousel";
import TalentsDisplay from "../custome-ui/TalentsDisplay";
import Services from "../custome-ui/Services";
import { Suspense } from "react";
import TriangleLoader from "../custome-ui/Loader";

const Homepage = () => {
  return (
    <>
      <main className="bg-[#151515] text-gray-200 w-full">
        {/* Hero Section */}
        <Hero />

        {/* Welcome Section */}
        <WelcomeCarousel />
        {/* Highlight Image
        <div className="relative w-full h-[300px] sm:h-[500px] lg:h-[600px]">
          <Image
            src="/images/image1.png"
            alt="Welcome Banner"
            fill
            priority
            className="rounded-md object-cover"
          />
        </div> */}

        {/* Talents Section */}
        <TalentsDisplay />

        {/* Services Section */}
        <Services />

        {/* Highlight Image */}
        <div className="relative w-full h-[300px] sm:h-[500px] lg:h-[600px]">
          <Image
            src="/images/image2.png"
            alt="Services Banner"
            fill
            className="rounded-md object-cover"
          />
        </div>

        {/* Latest News Section */}
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-32">
              <TriangleLoader
                visible={true}
                height={80}
                width={80}
                color="#6785A5"
              />
            </div>
          }
        >
          <News />
        </Suspense>

        {/* FAQ Section */}
        {/* <div className="pb-10 sm:pb-20 lg:pb-32">
          <FAQ />
        </div> */}
      </main>
    </>
  );
};

export default Homepage;
