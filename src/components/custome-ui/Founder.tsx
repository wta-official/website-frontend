import { founders } from "@/data/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Founder = () => {
  return (
    <div className="px-20 py-10 text-white">
      <h1 className="text-6xl font-[84px] mb-8">Our Founders</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <div className="relative h-[392px] overflow-hidden">
              <Image
                src={founder.image || "/fallback-image.jpg"}
                alt={founder.name || "Founder image"}
                fill
                className="object-cover transform scale-110 group-hover:scale-100 group-hover:translate-y-0 transition duration-500"
              />
            </div>

            {/* Founder Details */}
            <div className="p-6 w-full mt-10">
              <p className="text-4xl font-semibold">{founder.name || "Unknown"}</p>
              <div className="flex items-center mt-4 space-x-2">
                <p className="text-3xl">{founder.position || "Position not specified"}</p>
                <ArrowRight className="w-12 h-10 group-hover:text-gray-400" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Founder;
