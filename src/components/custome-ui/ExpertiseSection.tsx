import React from "react";
import Images from "@/components/custome-ui/Images";

type Props = {
  gallery: string[];
  expertise: string[];
};

const ExpertiseSection: React.FC<Props> = ({ gallery, expertise }) => (
  <Images imageUrl={gallery[1]}>
    <div className="w-full flex justify-center items-end bg-gradient-to-t from-black/80 via-black/50 to-transparent">
      <div className="px-4 md:px-10 lg:px-16 py-6">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {expertise.map((item, index) => (
            <p key={index} className="text-base md:text-lg lg:text-xl text-gray-300">
              {item.toUpperCase()}
            </p>
          ))}
        </div>
      </div>
    </div>
  </Images>
);

export default ExpertiseSection;
