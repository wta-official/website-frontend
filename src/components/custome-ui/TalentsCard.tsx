import { Talent } from '@/data/data';
import { formatName } from '@/utils/string';
import { ArrowRight } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface TalentsCardProps {
  talentInfo: Talent;
}

const TalentsCard = ({ talentInfo }: TalentsCardProps) => {
  return (
    <div
      className="w-full sm:max-w-[45%] lg:max-w-[30%] snap-start transition-all duration-300 rounded-lg text-white shadow-md group"
      role="article"
    >
      <Link
        href={`/talents/${talentInfo.id}`}
        aria-label={`View details for ${talentInfo.name}`}
      >
        {/* Image Section */}
        {/* <Image
          src={talentInfo.image}
          alt={`${talentInfo.name + talentInfo.id}`}
          width={500}
          height={500}
          className="w-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:opacity-80 rounded-t-lg min-h-40"
          priority
        /> */}
        <Image
          src={talentInfo.image}
          alt={`${talentInfo.name + talentInfo.id}`}
          width={500}
          height={400}
          className="w-full h-[400px] object-cover rounded-t-lg group-hover:scale-105 group-hover:opacity-80 transition-all duration-300"
          priority
        />

        {/* Content Section */}
        <div className="p-4 space-y-2">
          {/* Name */}
          <h4 className="text-xl font-bold">{formatName(talentInfo.name)}</h4>

          {/* Positions */}
          <div className="flex justify-between items-center">
            <div className="flex flex-wrap space-x-2 items-center">
              <p>
                <span className="text-sm md:text-base opacity-85">
                  {talentInfo.roles[0].toUpperCase()}
                </span>
                <span className="mr-2"> •</span>
                {talentInfo.roles[1] && (
                  <span className="text-sm md:text-base opacity-85">
                    {talentInfo.roles[1].toUpperCase()}
                  </span>
                )}
              </p>
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
