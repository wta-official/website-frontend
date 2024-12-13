import { div } from "motion/react-client";
import Image from "next/image";
import { histories } from "@/data/data";


const History = () => {
  return (
    <div className="flex text-white px-20 pb-10 space-x-20 justify-between">
      <h1 className="text-6xl mt-10">Our History</h1>
      <div className="no-scrollbar max-w-[900px] overflow-y-auto h-[587px] relative px-20">
        <div className="">
          {histories.map((history, index) => (
            <div key={index} className="relative p-10">
              <div className="space-y-10 p-10 history-bg">
                <h2 className="text-5xl">{history.date}</h2>
                <p className="text-2xl text-gray-300">{history.history}</p>
              </div>

              <div className="absolute top-10 left-0 border-l-4 border-[#474747] h-full w-10">
                {/* <div className="relative w-52"> */}
                <Image
                  src="/images/checkmark-badge-02.svg"
                  alt="checkbox"
                  width="10000"
                  height="10000"
                  className="absolute -left-5 -top-2 size-10 z-50"
                />
                {/* </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
