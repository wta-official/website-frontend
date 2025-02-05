import React from "react";
import Image from "next/image";

type Props = {
  filmography: { type: string; titles: Record<string, string> }[];
};

const FilmographySection: React.FC<Props> = ({ filmography }) => (
  <div className="w-full px-4 md:px-8 lg:px-16 mb-10 md:mb-16 lg:mb-20">
    {filmography.map((filmographyItem, index) => (
      <div key={index} className="p-6 rounded-lg shadow-lg w-full">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          {`Filmography (${filmographyItem.type})`}
        </h2>
        <hr className="border-t mb-6" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          {Object.entries(filmographyItem.titles).map(([key, value]) => (
            <div key={key} className="">
              <Image
                src={value}
                alt={key}
                width={100}
                height={50}
                className="object-cover rounded-md"
              />
              <h1 className="font-bold md:font-medium text-xs md:text-md uppercase text-gray-500">
                {key}
              </h1>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default FilmographySection;
