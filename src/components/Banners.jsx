import React from "react";
import airPodMax from "../../public/airpodsmax.png";
import appleVisionPro from "../../public/applevisionpro.png";
import playstation5 from "../../public/playstation5.png";
import macBookAir from "../../public/macbookair.png";
import macBookAirMini from "../../public/macbookairmini.png";
import bottombody from "../../public/bottombody.png";
import ButtonTransparent from "./ButtonTransparent";
import Image from "next/image";

export default function Banners() {
  const bannerCards = [
    {
      image: airPodMax,
      title: "Apple AirPods",
      span: "Max",
      subTitle: "Computational audio. Listen, it's powerfull",
      bgcolor: "bg-lightgray",
    },
    {
      image: appleVisionPro,
      title: "Apple Vision",
      span: "Pro",
      subTitle: "An immersive way to experience entertainment",
      bgcolor: "bg-darkergray",
    },
    {
      image: playstation5,
      title: "Playstation",
      span: "5",
      subTitle:
        "Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will refine your PlayStation experience.",
      bgcolor: "bg-white",
    },
  ];

  const featuredCard = [
    {
      image: macBookAir,
      miniImage: macBookAirMini,
      bottomImage: bottombody,
      title: "Macbook",
      span: "Air",
      subTitle:
        "The new 15-inch MacBook Air makes makes room for more of what you love with a spacious Liquid Retina display.",
      bgcolor: "lightgray",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:grid md:grid-cols-2 md:w-[100%]  justify-center">
        {bannerCards.map((card, index) => (
          <div
            key={index}
            className={`${card.bgcolor} py-[40px] w-full h-auto flex flex-col gap-2 justify-center items-center md:flex-row`}
          >
            <div>
              <Image src={card.image} alt="banner image" />
            </div>
            <div className=" flex flex-col items-center justify-center">
              <h3
                className={`${
                  index % 2 !== 0 ? "text-white" : ""
                } text-[35px] md:flex md:items-end`}
              >
                {card.title} <b>{card.span}</b>
              </h3>
              <p className="text-[16px] text-philippinegray text-center font-medium w-[97%]">
                {card.subTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
      {featuredCard.map((card, index) => (
        <div
          key={index}
          className={`${card.bgcolor}  bg-lightgray py-[40px] w-full h-auto flex flex-col md:flex-row-reverse gap-4 justify-center items-center`}
        >
          {/* featured section image */}
          <div className="flex flex-col  justify-center items-center mt-4 h-full outline">
            <div className="hidden md:block object-fill outline ">
              <Image src={card.image} alt="banner image" />
            </div>
            <div className="block md:hidden">
              <Image src={card.miniImage} alt="mini banner image" />
            </div>
          </div>
          {/* featured section text content */}
          <div
            className="flex flex-col justify-center items-center md:items-start outline"
          >
            <span>a</span>
            <span>b</span>
            <span>c</span>
            <h3 className=" text-[30px] text-linear flex flex-nowrap md:text-[80px]">
              <span className="font-bold md:font-light"> {card.title} </span>&nbsp;
              <span className="md:font-bold"> {card.span}</span>
            </h3>
            <p className="text-sm text-philippinegray px-8 text-center">
              {card.subTitle}
            </p>
            <div className="font-medium my-4 md:w-[284px] w-full px-8">
              <ButtonTransparent
                title="Shop Now"
                textColor="linear"
                outlineColor="linear"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
