import React from "react";
import LadyOnPhone from "../../../public/lady-on-phone.svg";
import PieGraph from "../../../public/pie-graph.svg";
import Image from "next/image";
const ImagesWithFloatCard2 = () => {
  return (
    <div className="relative md:w-[494px] md:h-[506px]">
      <Image src={LadyOnPhone} alt="man on phone" className="w-full" />

      <div className="absolute -bottom-[30%] md:bottom-[-30%] left-[15%] py-12 flex flex-col items-center gap-5 w-[251px] h-[388px] bg-white shadow-md rounded-md">
        <Image src={PieGraph} alt="" />

        <div className="w-full flex items-center gap-5 justify-start pl-8">
          <div className="h-2 w-2 bg-[#0DBBFC] rounded-full"></div>
          <p className="text-sm text-[#0A2640] font-normal">
            35% - Agile Development
          </p>
        </div>

        <div className="w-full flex items-center gap-5 justify-start pl-8">
          <div className="h-2 w-2 bg-[#69E6A6] rounded-full"></div>
          <p className="text-sm text-[#0A2640] font-normal">
            30% - Investor bandwidth
          </p>
        </div>

        <div className="w-full flex items-center gap-5 justify-start pl-8">
          <div className="h-2 w-2 bg-[#C4C4C4] rounded-full"></div>
          <p className="text-sm text-[#0A2640] font-normal">
            35% - A/B testing
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImagesWithFloatCard2;
