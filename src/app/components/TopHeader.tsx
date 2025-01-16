import React from "react";
import { GiTireIronCross } from "react-icons/gi";

const topHeader = () => {
  return (
    <>
      {/* Top Header Start */}
      <main className="bg-black w-full h-[38px] text-white flex justify-center items-center relative max-w-screen-2xl mx-auto">
        <div className="flex justify-center items-center">
          <h2 className="text-xs sm:text-sm ">
            Sign up and get 20% off to your first order.
          </h2>
          <button className=" underline text-xs ml-2 sm:text-sm">
            Sign Up Now
          </button>
        </div>
        <GiTireIronCross className="absolute right-[50px] hidden sm:block " />
      </main>
      {/* Top Header End*/}
    </>
  );
};

export default topHeader;
