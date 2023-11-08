import Image from "next/image";
import logo from "../../public/logo.svg";
import burger from "../../public/burger.svg";
import favorites from "../../public/favorites.svg";
import cart from "../../public/cart.svg";
import user from "../../public/user.svg";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex w-full md:px-[160px] justify-between py-[20px] px-[16px] items-center gap-[10%] h-auto">
      <div className="flex gap-8 flex-inline items-center">
        {/* logo */}
        <Image src={logo} />
        {/* Search bar */}

        <div className="hidden md:flex gap-2 w-[31vw] h-[56px] rounded-[8px] flex-inline bg-darkgray justify-start items-center px-6">
          <div className="opacity-40">
            <FaSearch />
          </div>
          <input
            type="search"
            name=""
            id=""
            placeholder="Search"
            className="bg-darkgray overflow-hidden pl-2 h-full w-full"
          />
        </div>
        {/* desktop menus */}
        <ul className="hidden md:flex gap-12">
          <li className="cursor-pointer font-semibold">Home</li>
          <li className="cursor-pointer font-semibold text-secondary">About</li>
          <li className="cursor-pointer font-semibold text-secondary">
            Contact&nbsp;Us
          </li>
          <li className="cursor-pointer font-semibold text-secondary">Blog</li>
        </ul>
        {/* Icon groups */}
        <ul className="gap-8 mt-1 scale-115 hidden md:flex">
          <li>
            <a href="">
              <Image src={favorites} />
            </a>
          </li>
          <li>
            <a href="">
              <Image src={cart} />
            </a>
          </li>
          <li>
            <a href="">
              <Image src={user} />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex md:hidden">
        <Image src={burger} />
      </div>
    </div>
  );
}
