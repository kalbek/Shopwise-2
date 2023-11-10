import Image from "next/image";
import gt from "../../public/gt.svg";
import lt from "../../public/lt.svg";
import phone from "../../public/iconphones.svg";
import smartwatch from "../../public/iconsmartwatches.svg";
import cameras from "../../public/iconcameras.svg";
import headphones from "../../public/iconheadphones.svg";
import computers from "../../public/iconcomputers.svg";
import gaming from "../../public/icongaming.svg";

export default function Categories() {
  const category = [
    { image: phone, label: "Phones" },
    { image: smartwatch, label: "Smart Watches" },
    { image: cameras, label: "Cameras" },
    { image: headphones, label: "Headphones" },
    { image: computers, label: "Computers" },
    { image: gaming, label: "Gaming" },
  ];
  return (
    <div className="flex flex-col bg-lotion py-6 md:px-32 px-4 justify-center">
      <div className="flex gap-4 justify-between px-1 md:pl-4 items-center py-8">
        <h1 className="text-xl font-medium md:text-2xl md:ml-[-1rem]">
          Browse By Category
        </h1>
        <span className="flex gap-6">
          <Image src={lt} />
          <Image src={gt} />
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
        {category.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 items-center h-auto rounded-2xl font-semibold bg-lightgray py-6 aspect-[1/1] justify-center"
          >
            <Image src={item.image} />
            <h2 className="md:font-semibold text-lg text-center leading-5">
              {item.label}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
