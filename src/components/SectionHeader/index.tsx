import React from "react";

interface SectionHeaderProps {
  title: string;
  description: string;
}
const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div className="w-full text-center flex flex-col items-center gap-3">
      <span className="text-lg text-[#777777] font-normal text-center">
        {title}
      </span>
      <h5 className="max-w-[842px] text-4xl md:text-[48px] text-[#000000] md:leading-[72px] font-normal text-center manrope">
        {description}
      </h5>
    </div>
  );
};

export default SectionHeader;
