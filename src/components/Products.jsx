import Image from "next/image";
import iphone14pro from "../../public/productIphone14pro.png";
import camera from "../../public/productcamera.png";
import applewatch from "../../public/productsmartwatch.png";
import airpodsmax from "../../public/productairpodsmax.png";
import samsungwatch from "../../public/productsamsungwatch.png";
import galaxyzfold from "../../public/productgalxyzfold.png";
import galaxybuds from "../../public/productgalaxybuds.png";
import appleipad from "../../public/productappleipad9.png";
import favorites from "../../public/heart.svg";
import BlackButton from "./BlackButton";

export default function Products() {
  const product = [
    {
      image: iphone14pro,
      description: "Apple iphone 14 Pro Max 128GB Deep...",
      price: 900,
    },
    {
      image: camera,
      description: "Blackmagic Pocket Cinima Camera 6K",
      price: 2535,
    },
    {
      image: applewatch,
      description: "Apple Watch Series 9GPS 41mm Starli...",
      price: 399,
    },
    { image: airpodsmax, description: "AirPods Max Silver", price: 594 },
    {
      image: samsungwatch,
      description: "Samsung Galaxy Watch6 Classic 4...",
      price: 369,
    },
    {
      image: galaxyzfold,
      description: "Galaxy Z Fold5 Unlocked | 256GB...",
      price: 1799,
    },
    { image: galaxybuds, description: "Galaxy Buds FE Graphite", price: 99.99 },
    {
      image: appleipad,
      description: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver...',
      price: 398,
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 md:grid-rows-2 py-4 px-2 bg-logion rounded-[8px] ">
        {product.map((item, index) => (
          <>
            <div className="flex flex-col gap-2 justify-center items-center bg-cultured m-2 pt-4 pb-4 px-2 rounded-[10px]">
              <div className="flex w-full justify-between p-4">
                <span></span>
                <Image className="cursor-pointer" src={favorites} />
              </div>
              <Image src={item.image} className="" />
              <h3 className="font-semibold text-md text-center h-[20%]">
                {item.description}
              </h3>
              <h2 className="font-semibold text-2xl h-auto">${item.price}</h2>
              <BlackButton width="100px" title="Buy Now" />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
