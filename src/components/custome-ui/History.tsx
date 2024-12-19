import Image from "next/image";
import { histories } from "@/data/data";

const History = () => {
  return (
    <div className="flex flex-col md:flex-row text-white px-6 md:px-20 pb-10 md:space-x-20 justify-between">
      {/* Title */}
      <h1 className="text-3xl md:text-6xl mt-10 md:mt-0 mb-8 md:mb-0 text-center md:text-left">
        Our History
      </h1>

      {/* Scrollable Content */}
      <div className="no-scrollbar max-w-full md:max-w-[900px] overflow-y-auto h-[500px] md:h-[587px] relative px-4 md:px-10">
        <div>
          {histories.map((history, index) => (
            <div
              key={index}
              className="relative p-6 md:p-10 border-l-4 border-[#474747]"
            >
              <div className="space-y-6 md:space-y-10 p-6 md:p-10 history-bg">
                <h2 className="text-2xl md:text-5xl">{history.date}</h2>
                <p className="text-base md:text-2xl text-gray-300">
                  {history.history}
                </p>
              </div>

              <div className="absolute top-6 md:top-10 left-0 -ml-3 md:-ml-5">
                <Image
                  src="/images/checkmark-badge-02.svg"
                  alt="checkbox"
                  width={40} // Smaller size for mobile
                  height={40}
                  className="w-6 h-6 md:w-10 md:h-10 z-50"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
