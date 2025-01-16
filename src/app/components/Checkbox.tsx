"use client";

import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";

const checkboxColors = [
  "bg-green-500",
  "bg-red-500",
  "bg-yellow-300",
  "bg-orange-400",
  "bg-blue-400",
  "bg-blue-600",
  "bg-purple-500",
  "bg-pink-600",
  "bg-white-500",
  "bg-black",
];

export function CheckboxDemo() {
  return (
  <div>
       <h1 className="text-xl font-bold pl-5 font-satoshi">Colors</h1>
      <div className="flex flex-wrap gap-1 px-5 mt-2">
        
        {checkboxColors.map((color, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Checkbox
              id={`checkbox-${index}`}
              className={`h-[37px] w-[37px] rounded-full ${color}`}
            />
            <label
              htmlFor={`checkbox-${index}`}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
            </label>
          </div>
        ))}
      </div>
      <hr className="m-4" />
  </div>

  );
}