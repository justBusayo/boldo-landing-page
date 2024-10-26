import React, { useEffect, useState } from "react";
import BoldoLogoDark from "../../../public/boldo-logo-dark.svg";
import BoldoLogo from "../../../public/boldo-logo.svg";
import Image from "next/image";
import { HambergerMenu } from "iconsax-react";
import Button from "../Buttons";
import Link from "next/link";

const Headers = () => {
  const [pageTop, setPageTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setPageTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full h-[91px] md:h-[120px] flex items-center justify-between px-4 md:px-[104px] 2xl:px-[180px] z-40 ${
        !pageTop ? "bg-white border border-gray-200" : ""
      }`}
    >
      {/* Logo */}
      <Image
        src={pageTop ? BoldoLogo : BoldoLogoDark}
        alt="boldo"
      />

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        {["Home", "Services", "About"].map((mnu) => (
          <Link
            href="/"
            key={mnu}
            className={`text-base font-semibold hover:text-[#69E6A6] ${
              pageTop ? "text-white" : "text-[#0A2640]"
            }`}
          >
            {mnu}
          </Link>
        ))}
        <Button
          label="Log in"
          className={`w-[124px] h-10 py-2 px-4 hover:bg-[#69E6A6] ${
            pageTop ? "bg-white text-[#0A2640]" : "bg-[#69E6A6] text-white"
          } `}
          onClick={() => {}}
        />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <HambergerMenu
          size="32"
          color={pageTop ? "#ffffff" : "#0A2640"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="cursor-pointer"
        />
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-[91px] left-0 w-full bg-white flex flex-col items-end space-y-4 py-6 px-7 shadow-lg md:hidden">
          {["Home", "Services", "About"].map((mnu) => (
            <Link
              href="/"
              key={mnu}
              className={`text-lg font-semibold hover:text-[#69E6A6] text-[#0A2640]`}
            >
              {mnu}
            </Link>
          ))}
          <Button
            label="Log in"
            className="w-[124px] h-10 bg-[#69E6A6] text-white py-2 px-4 rounded-xl hover:bg-[#69E6A6]"
            onClick={() => {}}
          />
        </div>
      )}
    </nav>
  );
};

export default Headers;
