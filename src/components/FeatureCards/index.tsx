import { ArrowRight } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FeatureCardsProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const FeatureCards: React.FC<FeatureCardsProps> = ({
  image,
  title,
  description,
  link,
}) => {
  return (
    <div className="flex flex-col p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
      <Image
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="flex flex-col flex-grow mt-4">
        <h2 className="text-2xl text-[#000000] font-normal mb-2">{title}</h2>
        <p className="text-xl text-[#777777] font-normal mb-4">{description}</p>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:gap-4 text-center text-[#0A2640] transition-colors duration-300"
        >
          <span>Explore page</span>
          <ArrowRight size={16} color="#0A2640" />
        </Link>
      </div>
    </div>
  );
};

export default FeatureCards;
