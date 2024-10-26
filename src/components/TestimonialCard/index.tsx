import Image from "next/image";
import React from "react";
interface TestimonialCardProps {
  avatar: string;
  testimony: string;
  name: string;
  role: string;
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimony,
  name,
  role,
  avatar,
}) => {
  return (
    <div className=" bg-white flex flex-col gap-5 p-5 rounded-md">
      <p className="max-w-[270px] text-2xl text-[#000000] manrope font-normal">
        {testimony}
      </p>
      <div className="flex items-center gap-3">
        <Image
          src={avatar}
          width={58}
          height={58}
          alt=""
          className="rounded-full"
        />
        <div className="flex flex-col">
          <p className="max-w-[530px] text-base text-[#0A2640] manrope font-bold">
            {name}
          </p>
          <p className="max-w-[530px] text-sm text-[#0A2640] manrope font-normal">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
