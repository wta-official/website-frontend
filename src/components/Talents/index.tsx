import Images from '@/components/custome-ui/Images';
import Image from 'next/image';
import SearchDate from './SearchDate';

const TalentsPage = async () => {
  return (
    <div>
      {/* Hero Section */}
      <Images imageUrl={'/images/aboutUsHero.png'}>
        <div className="flex-grow w-full flex items-end px-4 md:px-12 lg:px-20">
          <p className="p-16 text-4xl">Our Talents</p>
        </div>
      </Images>

      {/* About Section */}
      <div className="flex flex-col lg:flex-row justify-between p-8 md:p-20 shadow-md">
        <h1 className="text-2xl min-w-96 font-bold mb-4 md:text-4xl">
          Meet The Faces of Tomorrow.
        </h1>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose">
          At Working Talent Agency, we take immense pride in representing a
          diverse and ever-evolving roster of exceptional talent. Each of our
          clients plays an integral role in our success, and we are dedicated to
          showcasing their unique qualities and remarkable abilities to the
          world. We believe that talent is not just a skill but a powerful story
          waiting to be told. That's why we work tirelessly to amplify their
          voices, create meaningful opportunities, and ensure that their impact
          is felt across industries.
        </p>
      </div>

      {/* Hero Image */}
      <Image
        src="/images/talents/herotalent2.png"
        alt="Group talents"
        width={100000}
        height={10000}
        className="w-full h-full"
      />

      {/* Explore Section */}
      <div className="mt-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 space-y-5 mb-10">
        <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          Explore Our Talent
        </h1>

        <SearchDate />
      </div>
    </div>
  );
};

export default TalentsPage;
