import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className='mt-8 flex flex-col bg-[#F2F0F1] w-full h-full justify-between items-center md:items-start  text-center md:h-[500px] md:flex-row max-w-screen-2xl mx-auto'>
      <div className='w-full mt-3 pl-3 md:w-[500px] md:mt-24 md:ml-8'>
        <h1 className='text-2xl font-extrabold md:text-5xl animate-pulse'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className='text-sm md:mt-3'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <button className='bg-black py-3 px-10 rounded-[20px] mt-10 text-sm text-[#fff] hover:bg-slate-400 transition-transform duration-300 ease-in-out hover:scale-110 animate-bounce '>Shop Now</button>
      </div>
      <div className='relative pt-7'>
        <Image src={"/profile.png"} alt='profile-pic' width={200} height={100} className='w-[472px] mr-12'></Image>
        <Image src={"/star.png"} alt='star-pic' width={200} height={200} className='w-[70px] md:w-[90px]  absolute top-12 right-7 pr-5 animate-spin'></Image>
        <Image src={"/star.png"} alt='star-pic' width={200} height={200} className='w-[50px] md:w-[70px]  absolute top-1/2 left-4 pr-5 animate-spin'></Image>

      </div>
    </div>
  )
}

export default HeroSection
