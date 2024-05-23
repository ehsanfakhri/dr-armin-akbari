"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
  PhoneCall,
  MapPin,
} from "lucide-react";
import Image from "next/image";

const DrawerCall = () => {
  return (
    <div className="fixed top-[88%] right-[5%]  z-30">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" size={"icon"}>
            <Plus />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full container ">
            <DrawerHeader>
              <DrawerTitle>راه های ارتباطی </DrawerTitle>
              {/* <DrawerDescription>Set your daily activity goal.</DrawerDescription> */}
            </DrawerHeader>

            <div className="p-4 pb-0 ">
              <div className="grid grid-cols-2 gap-4 ">
                {/* times work & locations */}
                {/* time work */}
                <div className="bg-primary-foreground  p-2">
                  <div className="border h-2 border-b-black" />
                  <div className="flex gap-2 p-4 justify-end">
                    <p>روزهای کاری</p>
                  </div>
                  <div className="flex gap-2 p-4 justify-end">
                    <p> تهران</p>
                    <CreditCard />
                  </div>
                  <div className="flex gap-2 p-4 justify-end">
                    <p> شنبه-یکشنبه-دوشنبه</p>
                  </div>
                  <div className="flex gap-2 p-4 justify-end">
                    <p> قزوین</p>
                    <CreditCard />
                  </div>
                  <div className="flex gap-2 p-4 justify-end">
                    <p> سه شنبه ها</p>
                  </div>
                  <div className="border h-2 border-b-black" />
                </div>

                {/* calls */}
                <div className="bg-primary-foreground h-[500px] p-2">
                  <div className="border h-2 border-b-black" />
                  <div className="flex gap-2 p-4 justify-end ">
                    <p>تماس سریع</p>
                    <PhoneCall />
                  </div>
                  <div className="flex gap-2 p-4 justify-end">
                    <p>مشاوره واتسپ </p>
                    <PhoneCall />
                  </div>
                  <div className="flex gap-2 p-4 justify-end">
                    <p> دریافت نوبت آنلاین </p>
                    <PhoneCall />
                  </div>
                  <div className="border h-2 border-b-black" />
                </div>
              </div>
            </div>

            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DrawerCall;
