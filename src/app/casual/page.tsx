import { AccordionDemo } from "@/app/components/Accordion";
import { CheckboxDemo } from "@/app/components/Checkbox";
import {Dresses} from "@/app/components/Dresses"
import {SliderDemo} from "@/app/components/Slider"
import Sizes from "../components/Sizes";
import CasualShirts from "../components/CasualShirts";
import { BreadcrumbDemo } from "../components/BreadCrumbs";



const casual = () => {
  return (
<>
<div><BreadcrumbDemo/></div>
<div className='flex flex-col sm:flex-row justify-center items-center space-x-6 '>
      {/* left div */}
    <div className="w-full h-full md:w-[295px] md:h-full border rounded-[16px] mt-12">
      <Dresses/>
        <SliderDemo/>
        <CheckboxDemo/>
        <Sizes/>
        <AccordionDemo/>
    </div>

      {/* right div */}
      <div className="w-full h-full sm:h-[1200px] md:w-[900px] ">
     <CasualShirts/>
      </div>
    </div>
</>
  )
}

export default casual


