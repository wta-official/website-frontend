"use client";

import NotFound from "@/app/not-found";
import Biography from "@/components/custome-ui/Biography";
import { founders } from "@/data/data";
import Image from "next/image";
import { useParams } from "next/navigation";

const FounderPage = () => {
  const params = useParams();
  const { id } = params || {};

  const founder = founders.find(
    (founder) => founder.name.split(" ").join("").toLowerCase() === id
  );

  if (!founder) {
    return <NotFound />;
  }

  return (
    <div className="bg-[#131313] text-white flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          src={
           founder.image
          }
          alt={founder.name}
          fill
          className="object-cover object-top"
        />
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-10 lg:p-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {founder.name}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mt-2 leading-relaxed">
            {founder.position}
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="px-4 md:px-8 lg:px-20 py-8 md:py-10">
        <div className="text-center text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose">
          <Biography biography={founder.about} />
        </div>
      </div>
    </div>
  );
};

export default FounderPage;
