"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Nav from "./Nav";
import Logo from "../logos/Logo";
import Socials from "@/components/Socials";

import { AlignJustify } from "lucide-react";
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify />
      </SheetTrigger>
      <SheetContent>
        <div className="flex  flex-col   items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            {/* sheet close */}
            <Logo />
            <Nav
              containerStyles="flex flex-col flex-col-reverse items-center gap-y-6"
              LinkStyles="text-xl  p-4 px-8 w-full text-center dark:hover:bg-primary dark:bg-secondary 
               hover:text-white bg-primary-foreground hover:bg-primary"
            />
          </div>
          <Socials containerStyles="flex gap-x-4" iconsStyles="text-2xl" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
