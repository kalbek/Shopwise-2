import Image from "next/image";
import phones from "../../public/phones.svg";
import computers from "../../public/computers.svg";
import smartwatches from "../../public/smart-watches.svg";
import cameras from "../../public/cameras.svg";
import headphones from "../../public/headphones.svg";
import gaming from "../../public/gaming.svg";

export default function SubNav() {
  return (
    <ul className=" hidden md:flex bg-darksecondary text-lightsecondary font-medium w-full gap-2 h-[48px] px-[160px]  justify-between items-center">
      <li>
        <span className="flex gap-2 cursor-pointer">
          <Image src={phones} className="scale-75 opacity-50" />
          Phones
        </span>{" "}
      </li>{" "}
      <span className="opacity-40">|</span>
      <li>
        <span className="flex gap-2 cursor-pointer">
          <Image src={computers} className="scale-75 opacity-50" />
          Cameras
        </span>{" "}
      </li>{" "}
      <span className="opacity-40">|</span>
      <li>
        <span className="flex gap-2 cursor-pointer">
          <Image src={smartwatches} className="scale-75 opacity-50" />
          Smart&nbsp;watches
        </span>
      </li>{" "}
      <span className="opacity-40">|</span>
      <li>
        <span className="flex gap-2 cursor-pointer ">
          <Image src={cameras} className="scale-75 opacity-50" />
          Cameras
        </span>{" "}
      </li>{" "}
      <span className="opacity-40">|</span>
      <li>
        <span className="flex gap-2 cursor-pointer">
          <Image src={headphones} className="scale-75 opacity-50" />
          Headphones
        </span>{" "}
      </li>{" "}
      <span className="opacity-40">|</span>
      <li>
        <span className="flex gap-2 cursor-pointer">
          <Image src={gaming} className="scale-75 opacity-50" />
          Gaming
        </span>{" "}
      </li>
    </ul>
  );
}
