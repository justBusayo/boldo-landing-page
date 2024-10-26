import React from "react";
interface FooterListProps {
  heading: string;
  list: string[];
}
const FooterList: React.FC<FooterListProps> = ({ heading, list }) => {
  return (
    <div className="flex flex-col gap-6 md:gap-12">
      <h4 className="flex gap-2 text-xl text-[#000000] font-bold">{heading}</h4>
      {list.map((ls) => (
        <div key={ls} className="flex items-center gap-2 text-base text-[#777777] font-normal">
          <span>{ls.split("*")[0]}</span>
          {ls.includes("*") && (
            <div
              key={ls}
              className="py-1 px-3 rounded-[120px] bg-[#65E4A3] text-[#0A2640] text-sm font-bold"
            >
              {ls.split("*")[1]}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FooterList;
