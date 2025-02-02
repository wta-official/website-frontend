import Image from 'next/image';
import { histories } from '@/data/data';

const History = () => {
  return (
    <div className="flex flex-col lg:flex-row text-white px-4 sm:px-6 md:px-12 lg:px-20 py-10 space-y-8 lg:space-y-0 lg:space-x-20 justify-between">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug sm:leading-normal md:leading-tight lg:leading-tight lg:min-w-[24rem]">
        Our History
      </h1>

      {/* Scrollable Content */}
      <div className="no-scrollbar max-w-full md:max-w-[900px] overflow-y-auto h-[400px] sm:h-[500px] md:h-[587px] relative px-4 md:px-8 lg:px-10 py-2">
        <div>
          {histories.map((history, index) => (
            <div
              key={index}
              className="relative px-4 sm:px-6 md:px-8 md:pb-8 lg:px-10 border-l border-[#474747]"
            >
              <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 p-4 sm:p-6 md:p-8 lg:p-10 history-bg">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl">
                  {history.date}
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray-300">
                  {history.history}
                </p>
              </div>

              <div className="absolute -top-2  left-0 -ml-3 sm:-ml-4 md:-ml-5 lg:-ml-6 z-50">
                <Image
                  src="/images/checkmark-badge-02.svg"
                  alt="checkbox"
                  width={40}
                  height={40}
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 z-50"
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
