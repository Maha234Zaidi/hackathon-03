import { MdOutlineEmail } from "react-icons/md";

export default function OurOffers(){
    return(
        <main className="w-full flex justify-center items-center max-w-screen-2xl mx-auto 2xl:ml-[70px]">
            <div className="w-[90%]  h-full sm:h-[150px] bg-black text-white flex flex-col sm:flex-row items-center p-2 sm:p-5 rounded-[20px] ">
               <h1 className="text-[27px] sm:text-4xl font-extrabold p-9 animate-pulse">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
               <div className="space-y-3 p-4">
                      <div className="flex  justify-start items-center sm:w-[330px] h-[40px] rounded-[62px] bg-[#F0F0F0]">
                          <MdOutlineEmail className="text-xl ml-2 text-black"/>
                          <input placeholder="Enter your email address" className="w-full ml-2 outline-none h-full text-black rounded-[62px]  bg-[#F0F0F0] sm:text-md text-xs "></input>
                       </div>
                       <div className="flex  justify-center items-center sm:w-[330px] h-[40px] rounded-[62px] bg-[#F0F0F0]">
                         <p className="text-black sm:text-lg text-sm ">Subscribe to Newsletter</p>
                       </div>

               </div>
            </div>
        </main>
    )
}