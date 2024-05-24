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
  icons,
  Icon,
} from "lucide-react";
import Image from "next/image";

const DrawerCall = () => {
  return (
    <section className="fixed top-[88%] left-[5%] z-30 ">
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            size={"sm"}
            variant="outline"
            className="gap-2 bg-primary   text-white hover:text- hover:bg-primary/90"
          >
            تماس
            <PhoneCall className=" " />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full container rounded-sm ">
            <DrawerHeader>
              <div className="text-center p-4">
                <DrawerTitle>راه های ارتباطی </DrawerTitle>
              </div>
            </DrawerHeader>

            <div className=" pb-0  ">
              <div className="grid grid-col bg-gray-50 dark:bg-primary  rounded-md shadow-md p-4  ">
                {/* times work & locations */}

                {/* calls */}
                <div className=" h-[200px] p-1 flex flex-col items-center gap-2">
                  <div className="border  border-b-black" />
                  <Button
                    variant={"destructive"}
                    className="flex  items-center gap-2 text-sm p-4 justify-end "
                  >
                    <p>تماس سریع</p>
                    <PhoneCall />
                  </Button>
                  <Button
                    variant={"secondary"}
                    className="flex gap-2 text-sm p-4 justify-end bg-green-500"
                  >
                    <p>مشاوره واتسپ </p>
                    <PhoneCall />
                  </Button>
                  <Button
                    variant={"outline"}
                    className="flex gap-2 text-sm p-4 justify-end"
                  >
                    <p> دریافت نوبت آنلاین </p>
                    <PhoneCall />
                  </Button>
                  <div className="border  border-b-black" />
                </div>

                {/* time work*/}
                <div className="  p-1">
                  <div className="border  border-b-black" />
                  <div className="flex gap-2  text-sm p-2 justify-end">
                    <p>روزهای کاری</p>
                  </div>
                  <div className="flex gap-2 text-sm p-1 justify-end">
                    <p> تهران : شنبه-یکشنبه-دوشنبه ها</p>
                    <MapPin />
                  </div>

                  <div className="flex gap-2 text-sm p-1  justify-end">
                    <p>قزوین : سه شنبه ها</p>
                    <MapPin />
                  </div>
                  <div className="flex gap-2 text-sm  justify-end">
                    <p> </p>
                  </div>
                  <div className="border  border-b-black" />
                </div>

                {/* locations */}
                <div className=" p-1">
                  <div className="border  border-b-black" />
                  <div className="flex gap-2  text-sm p-2 justify-end">
                    <p> آدرس ها </p>
                  </div>
                  <div className="flex gap-2 tracking-tighter text-right text-sm justify-end">
                    <p className="pt-2">
                      تهران، سعادت آباد، میدان کاج، ضلع شمال میدان، خیابان
                      دوازدهم (علی اکبری) پ41 واحد 3
                    </p>
                    <MapPin />
                  </div>

                  <div className="flex tracking-tighter text-right gap-2 text-sm justify-end">
                    <p className="pt-2">
                      قزوین چهارراه خیام ساختمان پزشکان خیام طبقه ۲
                    </p>
                    <MapPin />
                  </div>
                  <div className="flex gap-2 text-sm p-4 justify-end">
                    <p> </p>
                  </div>
                  <div className="border border-b-black" />
                </div>
              </div>
            </div>

            <DrawerFooter>
              <div className="p-4 text-center">
                <DrawerClose asChild>
                  <Button variant="outline">بستن</Button>
                </DrawerClose>
              </div>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </section>
  );
};

export default DrawerCall;
