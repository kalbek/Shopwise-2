import Image from "next/image";
import phones from "../../public/phones.svg";
import computers from "../../public/computers.svg";
import smartwatches from "../../public/smart-watches.svg";
import cameras from "../../public/cameras.svg";
import headphones from "../../public/headphones.svg";
import gaming from "../../public/gaming.svg";

export default function SubNav() {
  return (
    <ul className=" hidden md:grid md:grid-cols-4 lg:grid-cols-6 md:flex-wrap bg-darksecondary text-lightsecondary font-medium w-full gap-2 h-auto px-[7%]  justify-between items-center">
      <li className="md:scale-[120%] flex  justify-around py-2">
        <span className="flex gap-2 cursor-pointer">
          <Image src={phones} className="scale-75 opacity-50" />
          Phones
        </span>{" "}
        <span className="opacity-40">|</span>
      </li>{" "}
      <li className="md:scale-[120%] flex  justify-evenly py-2">
        <span className="flex gap-2 cursor-pointer">
          <Image src={computers} className="scale-75 opacity-50" />
          Cameras
        </span>{" "}
        <span className="opacity-40 ">|</span>
      </li>{" "}
      <li className="md:scale-[120%] flex  justify-evenly py-2">
        <span className="flex gap-2 cursor-pointer">
          <Image src={smartwatches} className="scale-75 opacity-50" />
          Smart Watches
        </span>
        <span className="opacity-40 ">|</span>
      </li>{" "}
      <li className="md:scale-[120%] flex  justify-evenly py-2">
        <span className="flex gap-2 cursor-pointer ">
          <Image src={cameras} className="scale-75 opacity-50" />
          Cameras
        </span>{" "}
        <span className="opacity-40 ">|</span>
      </li>{" "}
      <li className="md:scale-[120%] flex  justify-evenly py-2">
        <span className="flex gap-2 cursor-pointer">
          <Image src={headphones} className="scale-75 opacity-50" />
          Headphones
        </span>{" "}
        <span className="opacity-40 ">|</span>
      </li>{" "}
      <li className="md:scale-[120%] flex  justify-evenly py-2">
        <span className="flex gap-2 cursor-pointer">
          <Image src={gaming} className="scale-75 opacity-50" />
          Gaming
        </span>{" "}
      </li>
    </ul>
  );
}
