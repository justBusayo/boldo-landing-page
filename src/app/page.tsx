"use client";
import Image from "next/image";
import HeroImage from "../../public/hero-graphics.svg";
import BoldoLogo from "../../public/boldo-logo.svg";
import PrestoLogo from "../../public/presto-logo.svg";
import CoolFeat from "../../public/cool-feature.svg";
import CoolerFeat from "../../public/cooler-feature.svg";
import CoolestFeat from "../../public/coolest-feat.svg";
import Button from "@/components/Buttons";
import SectionHeader from "@/components/SectionHeader";
import FeatureCards from "@/components/FeatureCards";
import ImagesWithFloatCard from "@/components/ImagesWithFloatCard";
import { Eye, Magicpen, Sun1, TickCircle } from "iconsax-react";
import ListBar from "@/components/ListBar";
import ImagesWithFloatCard2 from "@/components/ImagesWithFloatCard/ImagesWithFloatCard2";

export default function Home() {
  return (
    <div className="w-full">
      <section className="w-full h-[100vh] bg-[#0A2640] flex flex-col gap-5 justify-center px-4 md:px-[104px] 2xl:px-[180px]">
        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="w-full md:w-[567px] flex flex-col gap-3 md:gap-5">
            <h5 className="max-w-[545px] text-4xl md:text-[48px] text-white md:leading-[72px] font-normal text-left manrope">
              Save time by building fast with Boldo Template{" "}
            </h5>
            <p className="max-w-[545px] text-left text-sm md:text-base text-[#F1F1F1] leading-12 font-normal ">
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>

            <div className="w-full flex items-center gap-5">
              <Button
                label="Buy Template"
                onClick={() => {
                  console.log("test");
                }}
                className="w-[247px] bg-[#69E6A6] text-#0A2640"
              />
              <Button
                label="Buy Template"
                onClick={() => {
                  console.log("test");
                }}
                className="w-[187px] border border-white"
              />
            </div>
          </div>
          <Image src={HeroImage} alt="Hero image" />
        </div>

        <div
          style={{
            mixBlendMode: "luminosity",
          }}
          className="w-full grid grid-cols-3 lg:grid-cols-6 gap-5 mt-11 opacity-85"
        >
          <Image src={BoldoLogo} alt="" className="opacity-20" />
          <Image src={PrestoLogo} alt="" className="opacity-50" />
          <Image src={BoldoLogo} alt="" />
          <Image src={PrestoLogo} alt="" />
          <Image src={BoldoLogo} alt="" className="opacity-50" />
          <Image src={PrestoLogo} alt="" className="opacity-20" />
        </div>
      </section>

      {/* ===== OUR SERVICES ===== */}
      <section className="w-full md:h-[100vh] flex flex-col gap-5 justify-center px-4 md:px-[104px] 2xl:px-[180px] py-[100px] md:py-[120px]">
        <SectionHeader
          title="Our Services"
          description="Handshake infographic mass market crowdfunding iteration."
        />

        <div className="w-full flex flex-col md:flex-row md:justify-between gap-8">
          <FeatureCards
            image={CoolFeat}
            title="Cool feature title"
            description="Learning curve network effects return on investment."
            link="/"
          />
          <FeatureCards
            image={CoolerFeat}
            title="Even cooler feature"
            description="Learning curve network effects return on investment."
            link="/"
          />
          <FeatureCards
            image={CoolestFeat}
            title="Cool feature title"
            description="Learning curve network effects return on investment."
            link="/"
          />
        </div>
      </section>

      {/* ====== START NOW ======== */}
      <section className="w-full md:h-[100vh] flex flex-col md:flex-row md:items-center md:justify-between gap-5 px-4 md:px-[104px] 2xl:px-[180px] py-[100px] md:py-[120px]">
        <ImagesWithFloatCard />
        <div className="flex flex-col gap-10 mt-[190px] md:mt-0">
          <p className="max-w-[493px] text-4xl text-[#000000] md:leading-[56px] manrope font-normal">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </p>

          <div className="flex flex-col gap-5">
            {[
              "We connect our customers with the best.",
              "Advisor success customer launch party.",
              "Business-to-consumer long tail.",
            ].map((ls) => (
              <div key={ls} className="flex items-center gap-3">
                <TickCircle size={24} color="#0A2640" variant="Bold" />
                <span className="text-lg text-[#000000] font-normal">{ls}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= CONNECT ===== */}
      <section className="w-full md:h-[100vh] flex flex-col md:flex-row md:items-center md:justify-between gap-5 px-4 md:px-[104px] 2xl:px-[180px] py-[100px] md:py-[120px] pb-[150px]">
        <div className="flex flex-col gap-10">
          <p className="max-w-[493px] text-4xl text-[#000000] md:leading-[56px] manrope font-normal">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </p>

          <div className="flex flex-col gap-5">
            <ListBar
              icon={<Magicpen size={24} color="#ffffff" />}
              text="We connect our customers with the best."
              className="bg-[#0A2640] text-white"
            />
            <ListBar
              icon={<Eye size={24} color="#000000" />}
              text="Advisor success customer launch party."
              className="bg-white text-[#000000] "
            />
            <ListBar
              icon={<Sun1 size={24} color="#000000" />}
              text="Business-to-consumer long tail."
              className="bg-white text-[#000000] "
            />
          </div>
        </div>

        <ImagesWithFloatCard2 />
      </section>

      {/* ====== ENTERPRISE ===== */}
      <section className="w-full md:h-[100vh] bg-[#0A2640] flex flex-col gap-5 justify-center px-4 md:px-[104px] 2xl:px-[180px] py-[100px] md:py-[120px]">
        <p className="max-w-[493px] text-4xl text-white md:leading-[56px] manrope font-normal">
          An enterprise template to ramp up your company website
        </p>
      </section>
    </div>
  );
}
