import Image from "next/image";
import logo from "../../public/logo.svg";
import burger from "../../public/burger.svg";
import favorites from "../../public/favorites.svg";
import cart from "../../public/cart.svg";
import user from "../../public/user.svg";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex px-4 md:px-[8%] justify-between py-[20px]">
      <div className="flex w-full flex-inline items-center justify-between">
        {/* logo */}
        <Image src={logo} />

        {/* Search bar */}
        <div className="hidden focus:outline group md:flex gap-2 lg:w-[40%] md:w-[200%] h-[56px] rounded-[8px] flex-inline bg-darkgray justify-start items-center px-6 group">
          <div className="opacity-40">
            <FaSearch />
          </div>
          <input
            type="search"
            name=""
            id=""
            placeholder="Search"
            className="bg-darkgray overflow-hidden pl-2 h-full w-full group focus:outline-none  "
          />
        </div>
        {/* desktop menus */}
        <ul className="hidden md:flex lg:gap-8 md:gap-2 text-sm md:mt-2 items-center">
          <li className="cursor-pointer font-semibold">Home</li>
          <li className="cursor-pointer font-semibold text-secondary">About</li>
          <li className="cursor-pointer font-semibold text-secondary">
            Contact&nbsp;Us
          </li>
          <li className="cursor-pointer font-semibold text-secondary">Blog</li>
          {/* Icon groups */}
          <li className="hidden md:block">
            <ul className="lg:gap-8 md:gap-2 lg:mt-1 md:mt-2 flex ">
              <li className="w-[30px] h-[30px]">
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
          </li>
        </ul>
      </div>
      <div className="flex md:hidden">
        <Image src={burger} />
      </div>
    </div>
  );
}
