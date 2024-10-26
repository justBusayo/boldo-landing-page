import React from "react";
import BoldoLogo from "../../../public/boldo-logo-dark.svg";
import Image from "next/image";
import FooterList from "./FooterList";
const Footer = () => {
  return (
    <section className="w-full md:h-[60vh] flex flex-col px-4 md:px-[104px] 2xl:px-[180px] py-[50px] md:py-[80px]">
      <div className="flex flex-col md:flex-row md:justify-between gap-5 xl:pr-20">
        <div>
          <Image src={BoldoLogo} alt="boldo" className="mb-7" />

          <p className="max-w-[300px] text-base text-[#777777] font-normal">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
        </div>

        <FooterList
          heading="Landings"
          list={["Home", "Products", "Services"]}
        />
        <FooterList
          heading="Company"
          list={["Home", "Careers*Hiring!", "Services"]}
        />
        <FooterList
          heading="Resources"
          list={["Blog", "Products", "Services"]}
        />
      </div>

      <p className="max-w-[300px] text-base text-[#777777] font-normal mt-7 md:mt-0">
        All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
