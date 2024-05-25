"use client";

// shadcd ui
import { Button } from "@/components/ui/button";
import Image from "next/image";

// next link
import Link from "next/link";
import Socials from "../Socials";
import CopyRight from "./copyright/CopyRight";
import Logo from "../headers/logos/Logo";

const Footer = () => {
  return (
    <footer className="py-8 hidden sm:block bg-tertiary  dark:bg-secondary/40 ">
      <div className="container mx-auto">
        <div className="flex  flex-col">
          <div className="flex flex-col-2 gap-8 justify-between items-center ">
            {/* days & Call */}
            <div className="flex flex-col gap-8 w-full  ">
              <h5 className="h5 max-w-xl text-right ">
                <span className="text-white "> روز های کاری </span>
                <p className=" sm:block hidden leading-loose ">
                  دفتر تهران : شنبه،یکشنبه،دوشنبه ها
                </p>
                <p className=" sm:block hidden leading-loose ">
                  دفتر قزوین : سه شنبه ها
                </p>
              </h5>
            </div>
            {/* border Y */}
            <span className="h-[200px] border-r border-white " />
            {/* address */}
            {/* tehran */}
            <div className="flex flex-col gap-8 w-full items-end  ">
              <h5 className="h5 max-w-xl text-right ">
                <span className="text-white ">دفتر تهران </span>
                <p className=" sm:block hidden leading-loose ">
                  نشانی : تهران، سعادت آباد، میدان کاج، ضلع شمال میدان، خیابان
                  دوازدهم (علی اکبری) پ41 واحد 3
                </p>
              </h5>
              {/* ghazvin */}
              <h5 className="h5 max-w-xl text-right ">
                <span className="text-white ">دفتر قزوین </span>
                <p className=" sm:block hidden leading-loose ">
                  نشانی : قزوین چهارراه خیام ساختمان پزشکان خیام طبقه ۲
                </p>
              </h5>
            </div>
          </div>

          <span className="w-full border border-b " />

          {/* days  */}
          <div className="flex flex-col-2 gap-8 justify-between items-center   ">
            <div className="flex  flex-col items-end w-full  ">
              <Logo />
            </div>
            <span className="h-[200px] border-r border-white " />
            {/* Call */}
            <div className="flex flex-col gap-8 w-full items-end ">
              <h5 className="h5 max-w-xl text-right ">
                <span className="text-white "> مشاوره زیبایی </span>
                <p className=" sm:block hidden leading-loose ">
                  تماس : 09367871412
                </p>
              </h5>
              <h5 className="h5 max-w-xl text-right ">
                <span className="text-white "> دریافت نوبت </span>
                <p className=" sm:block hidden leading-loose ">
                  تماس : 09122854733
                </p>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
