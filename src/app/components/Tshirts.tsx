
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

// types of products
interface ProductsTypes {
  title: string;
  price: string;
  oldPrice?: string;
  rating?: string;
  id?:number;
  imgPath: string;
  discount?: string;
}

// array of object 
let productsData: ProductsTypes[] = [
  {
    title: "Polo with Contrast Trims",
    price: "$212",
    imgPath: "/tshirt1 (4).png",
    oldPrice:"$242",
    discount:"-20%",
    id: 1,
  },
  {
    title: "Gradient Graphic T-shirt",
    price: "$145",
    imgPath: "/tshirt1 (3).png",
    id: 2,
  },
  {
    title: "Polo with Tipping Details",
    price: "$180",
    imgPath: "/tshirt1 (2).png",
    id: 3,
  },
  {
    title: "Black Striped T-shirt",
    price: "$120",
    oldPrice:"$150",
    imgPath: "/tshirt1 (1).png",
    discount:"-30%",
    id:4,
  },
];

//array of stars
let star = [
  <FaStar key={1} />,
  <FaStar key={2} />,
  <FaStar key={3} />,
  <FaStar key={4} />,
  <FaStar key={5} />,
];

const Tshirts = () => {
  return (
    <div className="mt-14 w-full h-full sm:h-[500px] max-w-screen-2xl mx-auto ">
      <h1 className="text-2xl text-center font-extrabold md:text-5xl animate-bounce uppercase">
      You might also like
      </h1>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center px-6 mt-10  ">
        {productsData.map((data) => {
          return (
            <div key={data.id}>
              <Link href={`/products/${data.id}`}>
                <div className="w-[296px] h-[298px] bg-[#F0EEED] rounded-3xl transition-transform transform hover:-translate-y-2 hover:shadow-xl">
                  <Image
                    src={data.imgPath}
                    alt={data.title}
                    width={100}
                    height={100}
                    className=" w-full h-full rounded-3xl"
                  ></Image>
                </div>
              </Link>
              <div className="mb-6">
                <p className="mt-3 text-md font-bold ">{data.title}</p>
                <div className="flex text-yellow-400 animate-pulse">
                                    {star.map((icon, index) => (
                                        <span key={index}>{icon}</span>
                                    ))}
                                </div>
                <p className="font-bold mt-2">
                  {data.price}{" "}
                  <span className="text-gray-400 line-through pl-1">
                    {data.oldPrice}
                  </span>
                  <span className="w-[58px] h-[28px] rounded-[62px]  p-1 text-[#FF3333] ml-3">
                    {data.discount}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tshirts;
