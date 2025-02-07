
import HeroSection from "./components/HeroSection";
import Products from "./products/page";
import FontSection from "./components/fontSection";
import TopSelling from "./products/topSelling";
import DressStyle from "./components/DressStyle";
import CustomerCarousel from "./components/Carousel"
import Fetch from "./components/fetch";





const page = () => {
  return (
    <div>
      
      <HeroSection />
      <FontSection />
      <Products />
      <Fetch/>
      <TopSelling />
      <DressStyle />
      <CustomerCarousel/>
      
    </div>
  );
};

export default page;
