import React from "react";
import Image from "next/image";
import Carousel from "@/components/custome-ui/Carousel";

type Props = {
  partnerships: Record<string, string>[];
};

const PartnershipsSection: React.FC<Props> = ({ partnerships }) => (
  <div className="w-full px-4 md:px-8 lg:px-16 py-10">
    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-200 mb-6">
      Partnerships
    </h1>
    <hr className="border-t border-gray-600 mb-8" />
    <Carousel>
      <div className="flex justify-center gap-0 md:gap-4 lg:hidden">
        {partnerships?.map((partners, index) => {
          const [key, value] = Object.entries(partners)[0];
          return (
            <div key={index} className="flex items-center justify-center min-w-[8rem] h-32">
              <Image
                src={value}
                alt={key}
                width={100}
                height={50}
                className="object-cover border-gray-400 rounded"
              />
            </div>
          );
        })}
      </div>
    </Carousel>
  </div>
);

export default PartnershipsSection;
