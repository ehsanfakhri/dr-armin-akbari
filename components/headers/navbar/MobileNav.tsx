"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Nav from "./Nav";
import Logo from "../logos/Logo";
import Socials from "@/components/Socials";

import { AlignJustify } from "lucide-react";
const MobileNav = () => {
  return (
    <Sheet>
      {/* sheet close */}
      <SheetTrigger>
        <AlignJustify />
      </SheetTrigger>
      <SheetContent>
        <div className="backdrop-blur-[2px] rounded-full  ">
          <div className="flex flex-col items-center justify-between h-screen py-8  ">
            <div className="flex flex-col items-center gap-y-32">
              <div className="bg-primary dark:bg-secondary w-full rounded-sm p-4  opacity-70 ">
                <Nav
                  containerStyles="flex flex-col flex-col-reverse items-center gap-y-6   "
                  LinkStyles="text-xl  p-4 px-8 w-full text-center rounded-full dark:hover:bg-primary dark:bg-secondary 
               hover:text-black text-white bg-primary hover:bg-white"
                />
              </div>
            </div>
            <Socials containerStyles="flex gap-x-4" iconsStyles="text-2xl" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
