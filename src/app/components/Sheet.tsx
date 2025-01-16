"use client";

import { Button } from "@/components/ui/button";

import { TiThMenu } from "react-icons/ti";
import Image from "next/image";
import logo from "@/app/assets/SHOP.CO.png";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenuDemo } from "./NavigationMenu";

const SHEET_SIDES = ["left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export function SheetSide() {
  return (
    <div className="grid gap-2 max-w-screen-2xl mx-auto">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button>
              <TiThMenu className="md:hidden" />
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <Image src={logo} alt="logo" className=" w-[100px] py-7 "></Image>

            <ul className="">
              <li className="grid grid-cols-1 gap-y-5">
                <Link href={""} >
                  <NavigationMenuDemo />
                </Link>
                <Link href={""} className="ml-4">On Sale</Link>
                <Link href={""} className="ml-4">New Arrivals</Link>
                <Link href={""} className="ml-4">Brands</Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
