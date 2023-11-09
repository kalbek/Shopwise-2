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
    <div className="flex flex-col bg-lotion py-6  ">
      <div className="flex gap-4 justify-between px-8 items-center py-8">
        <h1 className="text-[24px] font-medium">Browse By Category</h1>
        <span className="flex gap-6">
          <Image src={lt} />
          <Image src={gt} />
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4  itmes-center p-4">
        {category.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 flex-grow   items-center font-semibold bg-lightgray rounded-[8px] py-6"
          >
            <Image src={item.image} />
            <h2>{item.label}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
