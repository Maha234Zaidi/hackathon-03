import { Check } from "lucide-react";
import { FaStar } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Tshirts from "./Tshirts";

const Review = [
  {
    name: "Samantha D.",
    feedback:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
    rating: 5,
    verified: true,
    date: "Posted on August 14, 2023",
  },
  {
    name: "Alex M.",
    feedback:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”",
    rating: 5,
    verified: true,
    date: "Posted on August 15, 2023",
  },
  {
    name: "Ethan R.",
    feedback:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
    verified: false,
    date: "Posted on August 16, 2023",
  },
  {
    name: "Olivia P.",
    feedback:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
    verified: true,
    date: "Posted on August 17, 2023",
  },
  {
    name: "Liam K.",
    feedback:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
    verified: true,
    date: "Posted on August 18, 2023",
  },
  {
    name: "Ava H.",
    feedback:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
    verified: true,
    date: "Posted on August 19, 2023",
  },
];

let star = [
  <FaStar key={1} />,
  <FaStar key={2} />,
  <FaStar key={3} />,
  <FaStar key={4} />,
  <FaStar key={5} />,
];

export default function Reviews() {
  return (
    <main className=" max-w-screen-2xl mx-auto mt-24">
      {/* top */}
      <div className="px-5 flex justify-between  my-4 relative">
        <Image
          src="/Frame (3).png"
          alt="img"
          width={100}
          height={100}
          className=" w-[35px] hidden md:block h-[35px] absolute left-[75%]  rounded-[52px] m-1"
        ></Image>
        <h1 className="sm:text-2xl font-bold ml-3 text-[20px] ">
          All Reviews <span className="text-gray-400 text-sm">(451)</span>
        </h1>
        <div className="space-x-3 flex ">
          <Button className="hidden md:block bg-[#F0F0F0] rounded-[62px] h-[40px]">
            Latest
          </Button>
          <Button className="bg-[#000000] rounded-[62px] text-white sm:px-[20px] sm:py-[16px] mb-3 text-[10px] sm:text-sm w-[113px] h-[40px] sm:w-full">
            Write Now Review
          </Button>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 mt-3 md:mt-0 ">
          {Review.map((data, i) => {
            return (
              <div className=" border p-5 rounded-[20px]" key={i}>
                <div className="flex text-yellow-400 animate-pulse">
                  {star.map((icon, index) => (
                    <span key={index}>{icon}</span>
                  ))}
                </div>
                <h2 className="font-bold text-xl mt-1 flex">
                  {data.name}{" "}
                  <Check className="bg-green-500  rounded-full text-white p-1" />{" "}
                </h2>
                <p className="text-sm">{data.feedback}</p>
                <p className="mt-5 text-gray-400">{data.date}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center text-center mb-12">
        <button className="bg-white py-3 px-10 rounded-[20px] mt-8 border border-gray-300 text-sm text-[#000000] hover:bg-slate-400 transition-transform duration-300 ease-in-out hover:scale-110 ">
          Load More Reviews
        </button>
      </div>
      <Tshirts />
    </main>
  );
}
