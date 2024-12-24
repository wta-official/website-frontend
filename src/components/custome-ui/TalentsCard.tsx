import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface TalentInfo {
  id: number;
  name: string;
  positions: string[];
  image: StaticImageData
}

interface TalentsCardProps {
  talentInfo: TalentInfo;
}

const TalentsCard = ({ talentInfo }: TalentsCardProps) => {
  return (
    <div
      className="w-full sm:max-w-[45%] lg:max-w-[30%] snap-start transition-all duration-300 rounded-lg text-white shadow-md group"
      role="article"
    >
      <Link  href={`/talents/${encodeURIComponent(
              talentInfo.name.split(" ").join("").toLowerCase()
            )}`} aria-label={`View details for ${talentInfo.name}`}>
        {/* Image Section */}
        <Image
          src={talentInfo.image}
          alt={`${talentInfo.name + talentInfo.id}`}
          width={500}
          height={500}
          className="w-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:opacity-80 rounded-t-lg"
          priority
        />

        {/* Content Section */}
        <div className="p-4 space-y-2">
          {/* Name */}
          <h4 className="text-xl font-bold">{talentInfo.name}</h4>

          {/* Positions */}
          <div className="flex justify-between items-center">
            <div className="flex flex-wrap space-x-2 items-center">
              {talentInfo.positions.map((position, index) => (
                <p key={index}>
                  {index !== 0 && <span className="mr-2">•</span>}
                  <span className="text-sm md:text-base opacity-85">
                    {position}
                  </span>
                </p>
              ))}
            </div>

            {/* Arrow Icon */}
            <ArrowRight className="size-4" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TalentsCard;
