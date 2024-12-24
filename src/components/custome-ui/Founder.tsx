import { founders } from "@/data/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Founder = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-10 text-white">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-tight lg:leading-snug mb-8">
        Our Founders
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {founders.map((founder, index) => (
          <Link
            key={index}
            href={`/founders/${encodeURIComponent(
              founder.name.split(" ").join("").toLowerCase()
            )}`}
            className="group relative flex flex-col shadow-md overflow-hidden transform hover:-translate-y-2 transition duration-300"
            aria-label={`View details about ${founder.name}`}
          >
            {/* Founder Image */}
            <div className="relative h-56 sm:h-64 md:h-80 lg:h-96 overflow-hidden">
              <Image
                src={founder.image || "/fallback-image.jpg"}
                alt={founder.name || "Founder image"}
                fill
                className="object-cover transform scale-105 group-hover:scale-100 group-hover:translate-y-0 transition duration-500"
              />
            </div>

            {/* Founder Details */}
            <div className="p-4 sm:p-5 md:p-6 w-full">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold truncate">
                {founder.name || "Unknown"}
              </p>
              <div className="flex items-center mt-2 sm:mt-3 space-x-2">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl truncate">
                  {founder.position || "Position not specified"}
                </p>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 group-hover:text-gray-400" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Founder;
