
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
    title: "T-shirt with Tape Details",
    price: "$120",
    imgPath: "/Frame 32 (2).png",
    id: 1,
  },
  {
    title: "Skinny Fit Jeans",
    price: "$240",
    imgPath: "/Frame 33 (2).png",
    oldPrice: "$260",
    discount: "-20%",
    id: 2,
  },
  {
    title: "Checkered Shirt",
    price: "$180",
    imgPath: "/Frame 34 (2).png",
    id: 3,
  },
  {
    title: "Sleeve Striped T-shirt",
    price: "$130",
    imgPath: "/Frame 38 (2).png",
    oldPrice: "$160",
    discount: "-30%",
    id: 4,
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

const products = () => {
  return (
    <>
    <div className="mt-10 w-full h-full sm:h-[500px] max-w-screen-2xl mx-auto">
      <h1 className="text-3xl text-center font-extrabold md:text-5xl animate-bounce">
        New Arrivals
      </h1>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center px-6 mt-10  ">
        {productsData.map((data) => {
          return (
            <div key={data.id}>
              <Link href={`/products`}>
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
        })
        }
      </div>
    </div>
     <div className="mb-12 flex justify-center text-center">
     <button className='bg-white py-3 px-14  rounded-[20px] mt-8 border border-gray-300 text-sm text-[#000000] hover:bg-slate-400 transition-transform duration-300 ease-in-out hover:scale-110 '>View All</button>
     </div>
     <hr />
     </>
  );
};

export default products;
