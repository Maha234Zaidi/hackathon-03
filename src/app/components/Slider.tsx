import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
   <>
    <div className="px-5">
      <h1 className="mb-4 font-satoshi font-bold text-xl" >Price</h1>
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn("w-[100%]", className)}
      {...props}
    />
    <div className="flex  justify-between mt-3">
      <h2 className="font-bold">$50</h2>
      <h2 className="font-bold">$100</h2>
    </div>
    </div>
    <hr className="m-4" />
   </>
  )
}
