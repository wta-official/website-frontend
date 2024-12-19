import Image from "next/image";

const MissionAndVision = () => {
  return (
    <section className="text-white md:px-8 lg:px-16">
      {/* Vision Section */}
      <div className="flex flex-col lg:flex-row gap-8 lg:h-[500px]">
        <div className="group flex-1 flex flex-col-reverse md:flex-col px-6 py-6 md:px-10 md:py-8 bg-black">
          <p className="text-sm md:text-base lg:text-lg leading-[30px] md:leading-[40px]">
            At WTA, our vision is to revolutionize talent management in Nigeria.
            We aspire to cultivate an environment where every individual's
            unique potential is recognized, cultivated, and empowered with the
            resources needed for unparalleled success.
          </p>
          <div className="flex flex-col flex-1 overflow-hidden mt-4 md:mt-14">
            <h1 className="text-[80px] md:text-[120px] lg:text-[150px] font-bold group-hover:text-[100px] transition-all duration-300">
              Our
            </h1>
            <h1 className="text-[80px] md:text-[120px] lg:text-[150px] font-bold -mt-4 md:-mt-8 lg:-mt-16 group-hover:text-[100px] group-hover:-mt-4 transition-all duration-300">
              Vision
            </h1>
          </div>
        </div>

        <div className="w-full lg:w-[400px]">
          <Image
            src="/images/about/mission.png"
            alt="Mission-related visual representation"
            width={400}
            height={400}
            className="object-contain w-full h-full"
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="flex flex-col-reverse md:flex-col lg:flex-row gap-8 lg:h-[500px] mt-4 bg-black">
        <div className="flex items-center flex-1 px-6 py-6 md:px-10 md:py-8">
          <p className="text-sm md:text-base lg:text-lg leading-[30px] md:leading-[40px]">
            We are dedicated to empowering Nigerian talents, enabling them to
            realize their fullest potential through innovative and tailored
            solutions that bridge the divide between skill and opportunity. Our
            mission is to cultivate a vibrant ecosystem where individuals are
            nurtured, honed, and seamlessly connected with the ideal platforms,
            thereby fostering sustainable growth and triumph in Nigeria's
            dynamic and multifaceted industries.
          </p>
        </div>
        <div className="group w-full lg:w-[400px] relative overflow-hidden">
          <h1 className="text-[150px] md:text-[250px] lg:text-[300px] absolute -mt-16 md:-mt-24 opacity-5 pointer-events-none">
            Our Services
          </h1>
          <div className="px-4 flex flex-col justify-end h-full mt-10 md:mt-16 group-hover:mt-0 transition-all duration-300">
            <h1 className="text-[80px] md:text-[120px] lg:text-[150px] font-bold group-hover:text-[100px] transition-all duration-300">
              Our
            </h1>
            <h1 className="text-[80px] md:text-[120px] lg:text-[150px] font-bold -mt-4 md:-mt-8 lg:-mt-16 group-hover:text-[100px] transition-all duration-300">
              Mission
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;
