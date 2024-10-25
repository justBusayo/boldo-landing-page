import React, { ReactNode } from "react";

interface ListBarProps {
  icon: ReactNode;
  text: string;
  className: string;
}
const ListBar: React.FC<ListBarProps> = ({ icon, text, className }) => {
  return (
    <div
      className={`w-full h-[68px] flex items-center gap-5 px-6 rounded text-base font-semibold shadow-md ${className}`}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default ListBar;
