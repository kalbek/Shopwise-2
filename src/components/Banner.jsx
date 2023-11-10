import React from "react";
import Image from "next/image";
import iphoneImage from "../../public/iphoneImage.png";
import iphoneImageLarge from "../../public/iphoneImageLarge.png";
import ButtonTransparent from "./ButtonTransparent";
import SubNav from "./SubNav";

export default function Banner() {
  return (
    <div className="h-auto bg-linear  ">
      {/* sub header */}
      <SubNav />
      {/* banner */}
      <div className="content flex flex-col items-center lg:grid md:grid-cols-2  md:justify-between md:px-[160px] md:w-full md:gap-4 pt-[45px]">
        <div className="flex flex-col items-center md:items-start mt-8 w-auto outline outline-white">
          <p className="text-secondary text-[28px] md:text-3xl font-medium ">Pro.Beyond.</p>
          <div className="flex flex-col items-center md:flex-row md:flex-wrap md:gap-4  ">
            <h1 className="text-white text-[70px] md:text-9xl md:ml-[-8px] font-extralight tracking-tight">
              IPhone 14
            </h1>
            <span className="text-white font-medium text-[72px] mt-[-6%] md:mt-[0%] md:text-9xl">
              Pro
            </span>
          </div>
          <p className="text-secondary text-center md:text-start px-4 text-[18px] md:text-2xl md:ml-[-16px] font-medium">
            Created to change everything for the better. For everyone
          </p>
          <span className="py-[32px]">
            <ButtonTransparent title="Shop Now" textColor="white" outlineColor="white" width="284px" />
          </span>
        </div>
        <div className="md:hidden mt-[2px]">
          <Image src={iphoneImage} />
        </div>
        <div className="hidden md:flex outline outline-white  justify-end">
          <Image src={iphoneImageLarge} />
        </div>
      </div>
    </div>
  );
}
