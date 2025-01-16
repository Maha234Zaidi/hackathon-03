import { Button } from "@/components/ui/button";
import { Trash2, Minus, Plus, ArrowRight, PenTool } from "lucide-react";
import Image from "next/image";
import { BreadcrumbDemo } from "../components/BreadCrumbs";

interface Icart {
  imageurl: string;
  title: string;
  id: number;
  size: string;
  color: string;
  price: string;
}
const cartItem: Icart[] = [
  {
    imageurl: "/tshirt1 (3).png",
    title: "Gradient Graphic T-shirt",
    id: 1,
    size: "large",
    color: "white",
    price: "$145",
  },
  {
    imageurl: "/Frame 34 (2).png",
    title: "Gradient Graphic T-shirt",
    id: 2,
    size: "Medium",
    color: "Red",
    price: "$180",
  },
  {
    imageurl: "/Frame 33 (2).png",
    title: "Gradient Graphic T-shirt",
    id: 3,
    size: "large",
    color: "Blue",
    price: "$240",
  },
];

export default function Cart() {
  return (
    <>
      <div>
        <div className="ml-12">
          <BreadcrumbDemo />
        </div>
        <h1 className="text-[40px] font-extrabold mt-4 uppercase font-integral ml-16">
          Your cart
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start gap-3 mt-6">
        {/* left div */}
        <div className="w-full h-full md:w-[700px] md:h-[500px] border rounded-[20px]">
          {cartItem.map((item) => {
            return (
              <div
                className="flex justify-between  mt-4 p-4 border-b"
                key={item.id}
              >
                <div className="flex gap-3">
                  <Image
                    src={item.imageurl}
                    alt={item.title}
                    className="rounded-[16px]"
                    width={100}
                    height={100}
                  ></Image>
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm text-gray-400 ">Size: {item.size}</p>
                    <p className="text-sm text-gray-400">Color: {item.color}</p>
                    <p className="font-bold">{item.price}</p>
                  </div>
                </div>
                {/* right side */}
                <div className="flex flex-col justify-between space-y-5">
                  <div className="ml-16">
                    <Trash2 className="text-[#FF3333] " />
                  </div>
                  <div className="w-[100px] h-[40px] flex justify-between p-3 items-center rounded-[62px] bg-[#F0F0F0] text-black ">
                    <Minus />
                    1
                    <Plus />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* right div */}
        <div className="w-full md:w-[400px] h-full md:h-[450px] border rounded-[20px]  flex flex-col justify-start items-center p-4">
          <div className="w-[90%] space-y-4">
            <h1 className="text-xl font-bold">Order Summary</h1>
            <p className="flex justify-between text-[#00000099]">
              Subtotal <span className="font-bold text-black">$565</span>{" "}
            </p>
            <p className="flex justify-between text-[#00000099]">
              Discount(-20%){" "}
              <span className="text-[#FF3333] font-bold">-$113</span>{" "}
            </p>
            <p className="flex justify-between text-[#00000099]">
              Delivery Fee <span className="font-bold text-black">$15</span>{" "}
            </p>
            <hr className="m-1" />
            <p className="flex justify-between text-[#000000]">
              Total <span className="font-bold text-black">$467</span>{" "}
            </p>
            <div className="flex relative">
              <PenTool className="absolute left-2 text-gray-400 m-[9px]" />
              <input
                className="bg-[#F0F0F0] w-[200px] md:w-full py-2 px-12 rounded-[16px] text-gray-600 outline-none  "
                placeholder="Add promo code"
              />
              <Button className=" bg-black text-white rounded-[62px] ml-1 w-[119px] h-[40px] ">
                Apply
              </Button>
            </div>
            <Button className="w-full bg-black text-white rounded-[62px] h-[55px] text-md">
              Go To Checkout <ArrowRight className="text-white mt-1" />{" "}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
