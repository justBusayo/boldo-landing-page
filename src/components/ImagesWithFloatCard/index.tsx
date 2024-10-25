import React from "react";
import ManOnPhone from "../../../public/man-on-phone.svg";
import CandleStick from "../../../public/chinese-candlestick.svg";
import Image from "next/image";
const ImagesWithFloatCard = () => {
  return (
    <div className="relative md:w-[494px] md:h-[506px]">
      <Image src={ManOnPhone} alt="man on phone" className="w-full" />

      <div className="absolute -bottom-[30%] md:bottom-[-20%] right-12 py-12 flex flex-col items-center gap-5 w-[251px] h-[388px] bg-white shadow-sm rounded-md">
        <Image src={CandleStick} alt="" />

        <div className="-ml-9">
          <h6 className="text-2xl text-[#0A2640] font-bold">30%</h6>
          <p className="text-sm text-[#0A2640] font-normal">
            More income in June
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImagesWithFloatCard;
