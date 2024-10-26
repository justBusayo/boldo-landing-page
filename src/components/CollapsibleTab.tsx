import { ArrowCircleDown } from "iconsax-react";
import React, { useState } from "react";
import { Interface } from "readline";

interface CollapsibleTabProps {
  title: string;
  details: string;
}
const CollapsibleTab: React.FC<CollapsibleTabProps> = ({ title, details }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full border-b border-[#C4C4C4] px-3 py-7">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-start justify-between gap-5"
      >
        <p className="text-[#000000] text-xl font-normal tex">{title}</p>
        <ArrowCircleDown
          color="#000000"
          size={28}
          variant="Bold"
          className={`cursor-pointer ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      {isOpen && (
        <div className="w-full mt-10">
          <p className="text-[#000000] text-xl font-light">{details}</p>
        </div>
      )}
    </div>
  );
};

export default CollapsibleTab;
