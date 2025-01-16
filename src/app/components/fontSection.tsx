import {
  Playfair_Display,
  Cinzel,
  Bodoni_Moda,
  Prata,
  Montserrat,
} from "next/font/google";
const font1 = Playfair_Display({ subsets: ["latin"] });
const font2 = Cinzel({ subsets: ["latin"] });
const font3 = Bodoni_Moda({ subsets: ["latin"] });
const font4 = Prata({ subsets: ["latin"], weight: "400" });
const font5 = Montserrat({ subsets: ["latin"] });

const fontSection = () => {
  return (
    // fontSection start

    <div className="bg-black w-full h-[170px]  md:justify-around justify-center space-x-3 flex flex-wrap max-w-screen-2xl mx-auto items-center px-10">
      <h1 className={`${font1.className} text-2xl md:text-5xl text-white animate-pulse`}>
        VERCASE
      </h1>
      <h1 className={`${font2.className} text-2xl md:text-5xl text-white animate-pulse`}>
        ZARA
      </h1>
      <h1 className={`${font3.className} text-2xl md:text-5xl text-white animate-pulse`}>
        GUCCI
      </h1>
      <h1 className={`${font4.className} text-2xl md:text-5xl text-white animate-pulse`}>
        PRADA
      </h1>
      <h1 className={`${font5.className} text-2xl md:text-5xl text-white animate-pulse`}>
        Calvin Klein
      </h1>
    </div>
    // End
  );
};

export default fontSection;
