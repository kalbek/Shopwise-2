import React from "react";
import Image from "next/image";
import iphoneImage from "../../public/iphoneImage.png";
import ButtonTransparent from "./ButtonTransparent";

export default function Banner() {
  return (
    <div className="h-auto bg-linear">
      <div className="content flex flex-col items-center md:items-start pt-[45px]">
        <p className="text-secondary text-[32px] font-bold">Pro.Beyond.</p>
        <h1 className="text-white text-[72px] font-extralight tracking-tight">
          IPhone 14
        </h1>
        <span className="text-white font-semibold text-[72px] mt-[-6%]">
          Pro
        </span>
        <p className="text-secondary text-center px-2 text-[20px] font-semibold">
          Created to change everything for the better. For everyone
        </p>
        <span className="py-[32px]">
          <ButtonTransparent title="Shop Now" textColor="white" />
        </span>
        <div className="mt-[2px]">
          <Image src={iphoneImage} />
        </div>
      </div>
    </div>
  );
}
