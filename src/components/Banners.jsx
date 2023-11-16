"use client";
import React from "react";
import airPodMax from "../../public/airpodsmax.png";
import appleVisionPro from "../../public/applevisionpro.png";
import playstation5 from "../../public/playstation5.png";
import macBookAir from "../../public/macbookair.png";
import macBookAirMini from "../../public/macbookairmini.png";
import bottombody from "../../public/bottombody.png";
import ButtonTransparent from "./ButtonTransparent";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { useState, useEffect } from "react";

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
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMediumScreen(window.innerWidth >= 768);
    };

    // Initial check on mount
    checkScreenWidth();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenWidth);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);
  const orderedBannerCards = [bannerCards[2], bannerCards[0], bannerCards[1]];
  const cardsToRender = isMediumScreen ? orderedBannerCards : bannerCards;

  // const selectedBannerCards =
  // window.innerWidth >= 768 ? orderedBannerCards : bannerCards;
  
  return (
    <div className="flex flex-col md:flex-row md:h-[87vh]">
      <div className="md:grid md:grid-cols-2 md:w-[100%] justify-center relative">
        {cardsToRender.map((card, index) => (
          <div
            key={index}
            className={`${card.bgcolor}  ${
              card.title === "Playstation" ? "md:col-span-2" : " "
            } py-[40px] w-full relative h-auto flex flex-col gap-2 justify-center items-center md:flex-row`}
          >
            <div
              className={`h-full md:absolute  aspect-auto  ${
                card.image !== playstation5 ? "-left-44" : "-left-20"
              } `}
            >
              <Image
                src={card.image}
                alt="banner image"
                className="md:w-80 md:h-full md:object-contain overflow-hidden"
              />
            </div>
            <div
              className={`md:absolute md:right-0 md:w-[64%] md:pr-10 z-50 bg-opacity-100 bg-inherit flex flex-col items-center justify-center md:items-start md:justify-start`}
            >
              <h3
                className={` ${card.title === "Apple Vision" && "text-white"} text-[35px] ${
                  card.title === "Playstation" && "md:text-[370%] font-semibold"
                }`}
              >
                {card.title}{" "}
                <br
                  className={`hidden ${
                    card.image !== playstation5 &&
                    card.title !== "Apple AirPods" &&
                    "md:flex"
                  }`}
                />{" "}
                <b>{card.span}</b>
              </h3>
              <p
                className={`${
                  card.title === "Playstation" && "md:w-[75%]"
                } text-[16px] text-philippinegray text-center md:text-start font-medium w-[97%] md:text-lg`}
              >
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
          <div className="flex flex-col  justify-center items-center mt-4 h-full">
            <div className="hidden md:block object-fill   ">
              <Image
                src={card.image}
                alt="banner image"
                className=" aspect-[9/16]"
              />
            </div>
            <div className="block md:hidden">
              <Image src={card.miniImage} alt="mini banner image" />
            </div>
          </div>
          {/* featured section text content */}
          <div className="flex flex-col justify-center items-center md:items-start md:pl-14 ">
            <h3 className=" text-[30px] text-linear flex flex-nowrap md:text-[80px] ">
              <span className="font-bold md:font-extralight">
                {" "}
                {card.title}{" "}
              </span>
              &nbsp;
              <span className="md:font-bold"> {card.span}</span>
            </h3>
            <p className="text-sm text-philippinegray px-8 md:px-2 text-center md:text-start md:text-lg md:font-medium">
              {card.subTitle}
            </p>
            <div className="font-medium my-4 md:w-[284px] w-full px-8 md:px-2 md:self-start md:font-medium md:mt-[40px]">
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
