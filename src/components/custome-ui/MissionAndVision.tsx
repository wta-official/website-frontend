import Image from "next/image";

const MissionAndVision = () => {
  return (
    <section className="text-white px-4 sm:px-6 md:px-8 lg:px-16">
      {/* Vision Section */}
      <div className="flex flex-col lg:flex-row gap-8 lg:h-[500px]">
        <div className="group flex-1 flex flex-col-reverse md:flex-col px-4 sm:px-6 md:px-10 py-6 bg-black">
          <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-8 md:leading-[40px]">
            At WTA, our vision is to revolutionize talent management in Nigeria.
            We aspire to cultivate an environment where every individual's
            unique potential is recognized, cultivated, and empowered with the
            resources needed for unparalleled success.
          </p>
          <div
            className="flex flex-col flex-1 overflow-hidden mt-4 md:mt-10"
            onClick={(e) => {
              e.currentTarget.classList.toggle('active');
            }}
          >
            <h1 className="text-[60px] sm:text-[80px] md:text-[120px] lg:text-[150px] font-bold group-hover:text-[80px] active:text-[80px] transition-all duration-300">
              Our
            </h1>
            <h1 className="text-[60px] sm:text-[80px] md:text-[120px] lg:text-[150px] font-bold -mt-2 md:-mt-6 lg:-mt-10 group-hover:text-[80px] active:text-[80px] group-hover:-mt-2 transition-all duration-300">
              Vision
            </h1>
          </div>
        </div>

        <div className="w-full lg:w-[400px] flex items-center justify-center">
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
      <div className="flex flex-col-reverse md:flex-col lg:flex-row gap-8 lg:h-[500px] mt-8 bg-black">
        <div className="flex items-center flex-1 px-4 sm:px-6 md:px-10 py-6">
          <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-8 md:leading-[40px]">
            We are dedicated to empowering Nigerian talents, enabling them to
            realize their fullest potential through innovative and tailored
            solutions that bridge the divide between skill and opportunity. Our
            mission is to cultivate a vibrant ecosystem where individuals are
            nurtured, honed, and seamlessly connected with the ideal platforms,
            thereby fostering sustainable growth and triumph in Nigeria's
            dynamic and multifaceted industries.
          </p>
        </div>
        <div
          className="group w-full lg:w-[400px] relative overflow-hidden"
          onClick={(e) => {
            e.currentTarget.classList.toggle('active');
          }}
        >
          <h1 className="text-[120px] sm:text-[150px] md:text-[250px] lg:text-[300px] absolute -mt-12 md:-mt-20 opacity-5 pointer-events-none">
            Our Services
          </h1>
          <div className="px-4 flex flex-col justify-end h-full mt-8 md:mt-14 group-hover:mt-0 active:mt-0 transition-all duration-300">
            <h1 className="text-[60px] sm:text-[80px] md:text-[120px] lg:text-[150px] font-bold group-hover:text-[80px] active:text-[80px] transition-all duration-300">
              Our
            </h1>
            <h1 className="text-[60px] sm:text-[80px] md:text-[120px] lg:text-[150px] font-bold -mt-2 md:-mt-6 lg:-mt-10 group-hover:text-[80px] active:text-[80px] transition-all duration-300">
              Mission
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;
