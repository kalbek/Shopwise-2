import React from "react";
import Image from "next/image";
import iphoneImage from "../../public/iphoneImage.png";
import iphoneImageLarge from "../../public/iphoneImageLarge.png";
import ButtonTransparent from "./ButtonTransparent";

export default function Banner() {
  return (
    <div className="h-auto bg-linear md:h-screen">
      <div className="content flex flex-col items-center md:flex-row   md:justify-between md:px-[160px] md:w-full  md:gap-4 pt-[45px]">
        <div className="flex flex-col items-center md:items-start mt-8   ">
          <p className="text-secondary text-[28px] font-medium ">Pro.Beyond.</p>
          <div className="flex flex-col items-center md:flex-row md:gap-4">
            <h1 className="text-white text-[70px] font-extralight tracking-tight">
              IPhone&nbsp;14
            </h1>
            <span className="text-white font-medium text-[72px] mt-[-6%] md:mt-[0%]">
              Pro
            </span>
          </div>
          <p className="text-secondary text-center px-4 text-[18px] font-semibold">
            Created to change everything for the better. For everyone
          </p>
          <span className="py-[32px]">
            <ButtonTransparent title="Shop Now" textColor="white" />
          </span>
        </div>
        <div className="md:hidden mt-[2px]">
          <Image src={iphoneImage} />
        </div>
        <div className="hidden md:flex md:h-full">
          <Image src={iphoneImageLarge} />
        </div>
      </div>
    </div>
  );
}
