"use client";

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FaStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Check, Minus, Plus } from "lucide-react";
import { BreadcrumbDemo } from "@/app/components/BreadCrumbs";
import Reviews from "@/app/components/Reviews";



// types of products
interface ProductsTypes {
  title: string;
  price: string;
  oldPrice?: string;
  rating?: string;
  id?: number;
  imgPath: string;
  discount?: string;
  img1: string;
  img2: string;
  img3: string;
}

// array of object
let productsData: ProductsTypes[] = [
  {
    title: "T-shirt with Tape Details",
    price: "$120",
    imgPath: "/Frame 32 (2).png",
    id: 1,
    img1: "/detail3.png",
    img2: "/detail2.png",
    img3: "/detail1.png",
  },
  {
    title: "Skinny Fit Jeans",
    price: "$240",
    imgPath: "/Frame 33 (2).png",
    oldPrice: "$260",
    discount: "-20%",
    id: 2,
    img1: "/detail3.png",
    img2: "/detail2.png",
    img3: "/detail1.png",
  },
  {
    title: "Checkered Shirt",
    price: "$180",
    imgPath: "/Frame 34 (2).png",
    id: 3,
    img1: "/detail3.png",
    img2: "/detail2.png",
    img3: "/detail1.png",
  },
  {
    title: "Sleeve Striped T-shirt",
    price: "$130",
    imgPath: "/Frame 38 (2).png",
    oldPrice: "$160",
    discount: "-30%",
    id: 4,
    img1: "/detail3.png",
    img2: "/detail2.png",
    img3: "/detail1.png",
  },
];
let star = [
  <FaStar key={1} />,
  <FaStar key={2} />,
  <FaStar key={3} />,
  <FaStar key={4} />,
  <FaStar key={5} />,
];

const ProDetatils = () => {
  const params = useParams();
  const id = params.id; // dynamic ID will get here
  const items = productsData.find((item) => item.id === Number(id));

  if (!items) {
    return <h1>Product not found</h1>;
  }

  return (
    <>
      < BreadcrumbDemo />
      <div
        className="flex flex-col md:flex-row  justify-center mt-12 sm:justify-evenly sm:mt-10 p-5 sm:p-0 
    max-w-screen-2xl mx-auto"
      >
        {/* left div */}
        <div className=" flex sm:flex-col justify-evenly items-center w-full sm:w-[156px] order-2 sm:order-1">
          <Image
            src={items.img1}
            alt="pro-deailed"
            width={100}
            height={100}
            className=" w-[100px] h-[100px] sm:w-[152px] sm:h-[150px] border border-black rounded-[20px]"
          ></Image>
          <Image
            src={items.img2}
            alt="pro-deailed"
            width={100}
            height={100}
            className="w-[100px] h-[100px] sm:w-[152px] sm:h-[150px] "
          ></Image>
          <Image
            src={items.img3}
            alt="pro-deailed"
            width={100}
            height={100}
            className="w-[100px] h-[100px] sm:w-[152px] sm:h-[150px] "
          ></Image>
        </div>

        <div className="sm:w-[444px] sm:h-full w-full my-3 sm:mt-0 order-1 sm:order-2">
          <Image
            src={items.img1}
            alt="pro-deailed"
            width={100}
            height={100}
            className="w-full h-[95%]"
          ></Image>
        </div>

        {/* rigt div */}

        <div className="w-full sm:w-[600px] h-[500px] mt-5 order-3">
          <h1 className="text-2xl md:text-3xl font-bold font-integral">
            One Life Graphic T-shirt
          </h1>
          <div className="flex text-yellow-400 animate-pulse">
                  {star.map((icon, index) => (
                    <span key={index}>{icon}</span>
                  ))}
                </div>
          <p className="font-bold mt-2">
            {items.price} <span>{items.oldPrice}</span>
          </p>
          <p>
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <hr className="mt-3" />

          {/* select colors */}

          <div className=" mt-4">
            <h2 className="text-[#00000099] font-satoshi font-normal text-base">
              Select Colors
            </h2>
            <div className="flex gap-4 mt-3">
              <div className="w-[37px] h-[37px] bg-[#4F4631] rounded-full flex justify-center items-center ">
                <Check className="text-white opacity-0 hover:opacity-100 cursor-pointer" />
              </div>
              <div className="w-[37px] h-[37px] bg-[#314F4A] rounded-full flex justify-center items-center">
                <Check className="text-white opacity-0 hover:opacity-100 cursor-pointer" />
              </div>
              <div className="w-[37px] h-[37px] bg-[#31344F] rounded-full flex justify-center items-center">
                <Check className="text-white opacity-0 hover:opacity-100 cursor-pointer" />
              </div>
            </div>
          </div>
          <hr className="my-5" />

          {/* choose size */}
          <div className="mt-4">
            <h2 className="text-[#00000099] font-satoshi font-normal text-base">
              Choose Size
            </h2>
            <div className="flex gap-[12px] mt-3 text-[#00000099] font-satoshi">
              <div className="bg-[#F0F0F0] w-[86px] h-[46px] rounded-[62px] flex justify-center items-center hover:cursor-pointer">
                Small
              </div>
              <div className="bg-[#F0F0F0] w-[105px] h-[46px] rounded-[62px] flex justify-center items-center hover:cursor-pointer">
                Medium
              </div>
              <div className="w-[89px] h-[46px] rounded-[62px] flex justify-center items-center bg-black hover:cursor-pointer text-white">
                Large
              </div>
              <div className="bg-[#F0F0F0] w-[105px] h-[46px] rounded-[62px] flex justify-center hover:cursor-pointer items-center">
                X-Large
              </div>
            </div>
          </div>
          <hr className="my-4" />

          <div className="flex space-x-4 justify-start items-center mt-9">
            <div className="bg-[#F0F0F0] w-[170px] py-3 px-5 h-[52px] rounded-[62px] flex justify-between items-center text-[#00000099]">
              <Minus />
              1
              <Plus />
            </div>
            <Button className="bg-black text-white w-[400px] h-[52px] rounded-[62px]">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      <hr className="mt-9 mx-8" />
      <Reviews/>
    </>
  );
};

export default ProDetatils;
