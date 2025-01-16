import { FaInstagram } from "react-icons/fa";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa6";
import Image from "next/image";
import OurOffers from "./OurOffers";

export default function Footer() {
  return (
    <main className="bg-[#F0F0F0] w-full h-full md:h-[480px] relative sm:mt-36 mt-52 max-w-screen-2xl mx-auto">
    
   <span className="absolute sm:top-[-80px] top-[-200px]">
        <OurOffers />
      </span> 
      {/* container */}
      <div className="flex h-full md:h-[400px] flex-col md:flex-row justify-between items-start p-5 pt-[160px] sm:pt-32 border-b  ">
        {/* top div */}
        <div className="flex flex-col justify-center items-center w-[200px] sm:my-4 sm:ml-12">
          <ul>
            <h2 className="text-2xl sm:text-3xl font-extrabold ml-12 sm:ml-0">SHOP.CO</h2>
            <p className="text-sm mt-3 text-[#00000099] ml-12 sm:ml-0">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            {/* icon */}
            <div className="flex items-center justify-center space-x-3 mt-3 ml-4 md:ml-0 md:justify-start">
              <FaInstagram className="text-xl" />
              <FaFacebook className="text-xl" />
              <FaGithub className="text-xl" />
              <FaTwitter className="text-xl" />
            </div>
          </ul>
        </div>
        {/* mid div */}
        <div className="w-full md:w-[900px] grid grid-cols-2 sm:grid-cols-4 place-items-center space-y-4">
          {/* box 1 */}
          <ul className="space-y-3 mt-4">
            <h2 className="text-sm sm:text-lg font-bold">Company</h2>
            <li className="text-sm text-[#00000099] font-satoshi font-normal ">About</li>
            <li className="text-sm text-[#00000099] font-satoshi font-normal ">Features</li>
            <li className="text-sm text-[#00000099] font-satoshi font-normal ">Works</li>
            <li className="text-sm text-[#00000099] font-satoshi font-normal ">Career</li>
          </ul>
          {/* box 2 */}
          <ul className="space-y-3">
            <h2 className="text-sm sm:text-lg font-bold">HELP</h2>
            <li className="text-sm text-[#00000099] font-satoshi font-normal ">Customer Support</li>
            <li className="text-sm text-[#00000099] font-satoshi font-normal ">Delivery Details</li>
            <li className="text-sm text-[#00000099] font-satoshi font-normal ">Terms & Conditions</li>
            <li className="text-sm text-[#00000099] font-satoshi font-normal ">Privacy Policy</li>
          </ul>
          {/* box 3*/}
          <ul className="space-y-3 ml-12 sm:ml-0">
            <h2 className="text-sm sm:text-lg font-bold">FAQ</h2>
            <li className="text-sm text-[#00000099] font-satoshi font-normal ">Account</li>
            <li className="text-sm text-[#00000099] font-satoshi font-normal ">Manage Deliveries</li>
            <li className="text-sm text-[#00000099] font-satoshi font-normal ">Orders</li>
            <li className="text-sm text-[#00000099] font-satoshi font-normal ">Payments</li>
          </ul>
          {/* box 4 */}
          <ul className="space-y-3">
            <h2 className=" text-sm sm:text-lg font-satoshi font-bold ">RESOURCES</h2>
            <li className="text-sm text-[#00000099] font-satoshi font-normal ">Free eBooks</li>
            <li className="text-sm text-[#00000099] font-satoshi font-normal ">Development Tutorial</li>
            <li className="text-sm text-[#00000099] font-satoshi font-normal ">How to - Blog</li>
            <li className="text-sm text-[#00000099] font-satoshi font-normal ">Youtube Playlist</li>
          </ul>
          {/* complete boxes*/}
        </div>
      <hr />
      </div>
      {/* bottom div */}
      <div className="flex flex-col sm:flex-row justify-between items-center pt-5 ">
        <p className="text-sm pl-7 font-medium">Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="flex items-center pt-3 justify-center sm:pr-3 ">
          <Image
            src={"/Badge.png"}
            className="w-[50px]"
            width={100}
            height={100}
            alt="pic"
          />
          <Image
            src={"/Badge (1).png"}
            className="w-[50px]"
            width={100}
            height={100}
            alt="pic"
          />
          <Image
            src={"/Badge (2).png"}
            className="w-[50px]"
            width={100}
            height={100}
            alt="pic"
          />
          <Image
            src={"/Badge (3).png"}
            className="w-[50px]"
            width={100}
            height={100}
            alt="pic"
          />
          <Image
            src={"/Badge (4).png"}
            className="w-[50px]"
            width={100}
            height={100}
            alt="pic"
          />
        </div>
      </div>
      
    </main>
  );
}
