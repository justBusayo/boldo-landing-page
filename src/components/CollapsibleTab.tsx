import { ArrowDown2 } from "iconsax-react";
import React, { useState } from "react";
import { Interface } from "readline";

interface CollapsibleTabProps {
  title: string;
  details: string;
}
const CollapsibleTab: React.FC<CollapsibleTabProps> = ({ title, details }) => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="w-full border border-[#C4C4C4] px-3 py-7">
      <p className="text-[#000000] text-xl font-normal">{title}</p>
      <div className="flex items-center justify-between gap-5">
        <ArrowDown2
          color="#000000"
          size={28}
          className={`cursor-pointer ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      {isOpen && (
        <div className="w-full">
          <p className="text-[#313030] text-xl font-normal">{details}</p>
        </div>
      )}
    </div>
  );
};

export default CollapsibleTab;
