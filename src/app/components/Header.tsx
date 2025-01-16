import React from "react";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import { NavigationMenuDemo } from "@/app/components/NavigationMenu";

import Image from "next/image";
import logo from "@/app/assets/SHOP.CO.png";
import { SheetSide } from "./Sheet";

const Header = () => {
  return (
    // navbar start
    <header className="flex justify-between items-center w-full h-[60px] px-8 pt-6 max-w-screen-2xl mx-auto">
      <div className="flex items-center justify-start">
        <SheetSide />
        <Image
          src={logo}
          alt="logo"
          className="pl-2 w-[100px] sm:w-[120px] shadow-lg transition-transform duration-300 hover:scale-105"
        ></Image>
      </div>
      <ul className="hidden md:block">
        <li className="flex space-x-5 items-center ">
          <Link href={""} >
            <NavigationMenuDemo />
          </Link>
          <Link href={""}>On Sale</Link>
          <Link href={""}>New Arrivals</Link>
          <Link href={""}>Brands</Link>
        </li>
      </ul>

      {/* search bar */}
      <div className="hidden lg:block">
        <div className="flex items-center bg-[#F0F0F0] rounded-[62px] w-[350px] h-[48px]">
          <IoSearch className="text-xl ml-5" />
          <input
            placeholder="Search for Products..."
            className="outline-none bg-[#F0F0F0] w-full h-full rounded-[62px]"
          />
        </div>
      </div>
      {/* Icons */}
      <div className="flex items-center mr-2 space-x-5">
        <IoSearch className="text-2xl ml-5 lg:hidden" />
        <Link href={"/cart"}>  <LuShoppingCart className="text-2xl " /></Link>
      
        <FaRegCircleUser className="text-2xl" />
      </div>
    </header>
    //  Navbar End
  );
};

export default Header;
