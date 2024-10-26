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
import TestimonialCard from "@/components/TestimonialCard";
import Dumbledore from "../../public/dumbledore.svg";
import Snape from "../../public/snape.svg";
import BGImage from "../../public/section-bg-img.svg";
import Potter from "../../public/potter.svg";
import LgTableTalk from "../../public/large-table-talk.svg";
import CollapsibleTab from "@/components/CollapsibleTab";
import BlogCard from "@/components/BlogCard";
import InputField from "@/components/InputField";
import Footer from "@/components/Footer";
import Headers from "@/components/Headers";
export default function Home() {
  const blogLists = [
    {
      id: 1,
      avatar: Dumbledore,
      image: CoolFeat,
      date: "November 22, 2021",
      category: "Category",
      writer: "Chandler Bing",
      description: "Pitch termsheet backing validation focus release.",
    },
    {
      id: 2,
      avatar: Snape,
      image: CoolerFeat,
      date: "November 22, 2021",
      category: "Category",
      writer: "Rachel Green",
      description:
        "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    },
    {
      id: 3,
      avatar: Potter,
      image: CoolestFeat,
      date: "November 22, 2021",
      category: "Category",
      writer: "Monica Geller",
      description:
        "Beta prototype sales iPad gen-z marketing network effects value proposition",
    },
  ];
  return (
    <div className="w-full">
      {/* ========HEADER =========== */}
      <Headers />
      {/* ======== HERO ========= */}
      <section className="relative w-full md:h-[100vh] bg-[#0A2640] flex flex-col gap-5 justify-center px-4 md:px-[104px] 2xl:px-[180px] pb-12 md:pb-0 pt-28">
        <Image
          style={{
            mixBlendMode: "luminosity",
          }}
          src={BGImage}
          alt=""
          className="absolute top-0 right-0"
        />
        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-12 z-10 mt-10 md:mt-0">
          <div className="w-full md:w-[567px] flex flex-col gap-7 md:gap-5">
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
                className="w-[247px] bg-[#69E6A6] text-[#0A2640]"
              />
              <Button
                label="Buy Template"
                onClick={() => {
                  console.log("test");
                }}
                className="w-[187px] border border-white text-white"
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
      <section className="w-full md:h-[100vh] flex flex-col gap-5 justify-center px-4 md:px-[104px] 2xl:px-[180px] py-[50px] md:py-[120px]">
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

      {/* ====== WE CONNECT LIST ======== */}
      <section className="w-full md:h-[100vh] flex flex-col md:flex-row md:items-center md:justify-between gap-5 px-4 md:px-[104px] 2xl:px-[180px] py-[50px] md:py-[120px]">
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

      {/* ======= MORE CONNECT ===== */}
      <section className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-5 px-4 md:px-[104px] 2xl:px-[180px] pt-[50px] pb-[150px] md:pb-[120px] md:mb-9">
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

      {/* ====== TESTIMONIAL ===== */}
      <section className="w-full md:h-[100vh] bg-[#0A2640] flex flex-col gap-10 justify-center px-4 md:px-[104px] 2xl:px-[180px] py-[100px] md:py-[120px]">
        <p className="max-w-[530px] text-4xl text-white md:leading-[56px] manrope font-normal">
          An enterprise template to ramp up your company website
        </p>

        <div className="w-full flex flex-col gap-7 md:flex-row md:justify-between">
          <TestimonialCard
            avatar={Dumbledore}
            name="Albus Dumbledore"
            testimony="“Buyer buzz partner network disruptive non-disclosure agreement business”"
            role="Manager @ Howarts"
          />
          <TestimonialCard
            avatar={Snape}
            name="Severus Snape"
            testimony="“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”"
            role="Manager @ Slytherin"
          />
          <TestimonialCard
            avatar={Potter}
            name="Harry Potter"
            testimony="“Release facebook responsive web design business model canvas seed money monetization.”"
            role="Team Leader @ Gryffindor"
          />
        </div>
      </section>

      {/* =======CUSTOMER CONNECT ====== */}
      <section className="w-full flex flex-col gap-10 justify-center px-4 md:px-[104px] 2xl:px-[180px] pt-[100px] pb-[50px]">
        <Image src={LgTableTalk} alt="" className="w-full" />
        <div className="w-full flex flex-col md:flex-row gap-7">
          <p className="max-w-[493px] text-4xl text-[#000000] md:leading-[56px] manrope font-normal">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </p>

          <div className="w-full flex flex-col gap-5">
            <CollapsibleTab
              title="We connect our customers with the best?"
              details="We connect our customers with the best, and help them keep up-and stay open."
            />
            <CollapsibleTab
              title="Android research & development rockstar? "
              details="We connect our customers with the best, and help them keep up-and stay open."
            />
          </div>
        </div>
      </section>

      {/* ========= BLOG SECTION ============ */}
      <section className="w-full md:h-[100vh] flex flex-col gap-5 justify-center px-4 md:px-[104px] 2xl:px-[180px] py-[50px] md:py-[120px]">
        <SectionHeader
          title="Our Blog"
          description="Value proposition accelerator product management venture"
        />

        <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-5">
          {blogLists.map((blog) => (
            <div key={blog.id}>
              <BlogCard
                writer={blog.writer}
                avatar={blog.avatar}
                image={blog.image}
                date={blog.date}
                category={blog.category}
                description={blog.description}
              />
            </div>
          ))}
        </div>

        <Button
          label="Load more"
          onClick={() => {}}
          className="w-[219px] h-[60px] mx-auto text-[#0A2640] border border-[#0A2640]"
        />
      </section>

      {/* ======== START NOW ============== */}
      <section className="w-full md:h-[70vh] flex items-center justify-center px-4 md:px-[104px] 2xl:px-[180px] py-[100px] md:py-[120px]">
        <div className="relative w-full xl:w-[1200px] py-24 bg-[#0A2640] rounded-2xl">
          <Image
            style={{
              mixBlendMode: "luminosity",
            }}
            src={BGImage}
            alt=""
            className="absolute top-0 right-0 z-10 rounded-2xl"
          />

          <div className="sticky w-full h-full flex flex-col items-center gap-6 z-20">
            <p className="max-w-[530px] text-4xl text-white  text-center md:leading-[56px] manrope font-normal">
              An enterprise template to ramp up your company website
            </p>
            <div className="flex flex-col md:flex-row items-center gap-5">
              <InputField onChange={() => {}} />
              <Button
                label="Start now"
                onClick={() => {
                  console.log("test");
                }}
                className="w-[247px] bg-[#69E6A6] text-[#0A2640]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================== FOOTER AREA =========== */}
      <Footer />
    </div>
  );
}
