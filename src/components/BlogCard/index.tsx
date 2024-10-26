import Image from "next/image";
import React from "react";

interface BlogCardProps {
  category: string;
  date: string;
  description: string;
  writer: string;
  avatar: string;
  image: string;
}
const BlogCard: React.FC<BlogCardProps> = ({
  writer,
  avatar,
  image,
  date,
  category,
  description,
}) => {
  return (
    <div className="flex flex-col p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
      <Image
        src={image}
        alt={description}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="flex flex-col flex-grow mt-4">
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-base text-[#0A2640] font-semibold">{category}</h2>
          <p className="text-sm text-[#777777] font-normal ">{date}</p>
        </div>
        <p className="text-xl text-[#777777] font-normal mb-4">{description}</p>
      </div>

      <div className="flex items-center gap-3">
        <Image
          src={avatar}
          width={32}
          height={32}
          alt=""
          className="rounded-full"
        />
        <p className="max-w-[530px] text-base text-[#000000] manrope font-normal">
          {writer}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
