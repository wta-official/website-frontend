import { founders } from "@/data/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Founder = () => {
  return (
    <div className="px-6 md:px-20 py-10 text-white">
      {/* Title */}
      <h1 className="text-3xl md:text-6xl font-bold mb-8 text-center md:text-left">
        Our Founders
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {founders.map((founder, index) => (
          <Link
            key={index}
            href={`/${encodeURIComponent(
              founder.name.split(" ").join("").toLowerCase()
            )}`}
            className="group relative flex flex-col shadow-md rounded-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition duration-300"
            aria-label={`View details about ${founder.name}`}
          >
            {/* Founder Image */}
            <div className="relative h-60 md:h-[392px] overflow-hidden">
              <Image
                src={founder.image || "/fallback-image.jpg"}
                alt={founder.name || "Founder image"}
                fill
                className="object-cover transform scale-110 group-hover:scale-100 group-hover:translate-y-0 transition duration-500"
              />
            </div>

            {/* Founder Details */}
            <div className="p-4 md:p-6 w-full">
              <p className="text-xl md:text-4xl font-semibold">
                {founder.name || "Unknown"}
              </p>
              <div className="flex items-center mt-2 md:mt-4 space-x-2">
                <p className="text-lg md:text-2xl">
                  {founder.position || "Position not specified"}
                </p>
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8 group-hover:text-gray-400" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Founder;
