
import HeroSection from "./components/HeroSection";
import Products from "./products/page";
import FontSection from "./components/fontSection";
import TopSelling from "./products/topSelling";
import DressStyle from "./components/DressStyle";
import CustomerCarousel from "./components/Carousel"



const page = () => {
  return (
    <div>
      
      <HeroSection />
      <FontSection />
      <Products />
      <TopSelling />
      <DressStyle />
      <CustomerCarousel/>
      
    </div>
  );
};

export default page;
