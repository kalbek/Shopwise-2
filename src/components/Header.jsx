import Image from "next/image";
import logo from "../../public/logo.svg";
import burger from "../../public/burger.svg";
export default function Header() {
  return (
    <div className="flex w-full  justify-between py-[24px] px-[16px]">
      <Image src={logo} />
      <div className="md:hidden">
        <Image src={burger} />
      </div>
    </div>
  );
}
