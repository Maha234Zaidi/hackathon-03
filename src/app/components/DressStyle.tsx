import Image from "next/image";

export default function DressStyle(){
    return(
          <div className="w-full h-full mt-24 sm:h-[690px] sm:w-[1200px] bg-[#F0F0F0] flex flex-col justify-start items-center pt-8 max-w-screen-2xl mx-auto rounded-[40px]">
            {/* top div */}
               <div className="mt-2 ">
                    <h1 className="text-3xl font-extrabold pl-6 sm:pl-0 animate-bounce">BROWSE BY DRESS STYLE</h1>
               </div>
               <div className=" w-[90%] h-full sm:h-[600px] mt-7 flex flex-wrap justify-center items-center">
                   <div className="w-[400px] h-[200px] m-1 relative"> 
                       <Image src={"/dress1.png"} className="w-full h-full rounded-[20px]" width={100} height={100} alt="dreesstyle1"></Image>
                     <span className="absolute top-10 left-5 font-bold text-xl">Casual</span>
                   </div>
                   <div className="w-[600px] h-[200px] m-1 relative">
                   <Image src={"/dress2.png"} className="w-full h-full rounded-[20px]" width={100} height={100}
                    alt="dreesstyle2"></Image>
                   <span className="absolute top-10 left-5 font-bold text-xl">Formal</span>
                   </div>
                   <div className="w-[600px] h-[200px] m-1 relative">
                   <Image src={"/dress3.png"} className="w-full h-full rounded-[20px] " width={100} height={100} alt="dreesstyle3"></Image>
                   <span className="absolute top-10 left-5 font-bold text-xl">Party</span>
                   </div>
                   <div className="w-[400px] h-[200px] m-1 relative"> 
                   <Image src={"/dress4.png"} className="w-full h-full rounded-[20px]" width={100} height={100} alt="dreesstyle4"></Image>
                   <span className="absolute top-10 left-5 font-bold text-xl">Gym</span>
                  </div>
               </div>
          </div>
    )
}