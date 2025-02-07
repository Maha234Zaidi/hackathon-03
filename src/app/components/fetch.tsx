"use client"; // Because we're using useEffect

import { useEffect, useState } from "react";
import client, { urlFor } from "@/sanity/lib/client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";


interface Product {
  _id: string;
  name: string;
  description: string;
  image: any;
  discount?: string;
  oldPrice?: string;
  price: string;
}

//array of stars
let star = [
  <FaStar key={1} />,
  <FaStar key={2} />,
  <FaStar key={3} />,
  <FaStar key={4} />,
  <FaStar key={5} />,
];
function truncateText(
  text: string | null | undefined,
  limit: number = 60
): string {
  if (!text) return ""; // Agar text undefined ya null ho to empty string return karein
  return text.length > limit ? text.slice(0, limit) + "..." : text;
}

export default function Fetch() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await client.fetch(`*[_type == "products"]`);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-center font-extrabold md:text-5xl animate-bounce mt-8">
        {" "}
        Sanity Products
      </h1>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center px-6 mt-10">
        <ul className="flex flex-wrap space-x-3 ml-[150px]">
          {products.map((product) => (
            <li key={product._id}>
              {product.image && (
                <div className="w-[296px] h-[298px] bg-[#F0EEED] rounded-6xl transition-transform transform hover:-translate-y-2 hover:shadow-xl">
                  <Image
                    src={urlFor(product.image).width(300).height(300).url()}
                    alt={product.name}
                    width={300}
                    height={300}
                  />
                </div>
              )}
              <div>
                <h2 className="mt-3 text-sm font-bold">{product.name} </h2>
                <div className="flex text-yellow-400 animate-pulse">
                  {star.map((icon, index) => (
                    <span key={index}>{icon}</span>
                  ))}
                </div>
                <p className="font-bold mt-2">
                  {product.price}
                  <p className=" flex flex-wrap text-sm font-normal  ">
                    {truncateText(product?.description, 40)}
                  </p>
                  <span className="text-gray-400 line-through pl-1">
                    {product.oldPrice}
                  </span>
                  <span className="w-[58px] h-[28px] rounded-[62px]  p-1 text-[#FF3333] ml-3">
                    {product.discount}
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
