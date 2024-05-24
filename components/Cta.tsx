"use client";

// shadcd ui
import { Button } from "@/components/ui/button";
import Image from "next/image";

// next link
import Link from "next/link";
import Socials from "./Socials";

const Cta = () => {
  return (
    <section className="py-8  bg-tertiary  dark:bg-secondary/40 ">
      <div className="container relative mx-auto">
        <div className="flex flex-col-2 justify-end items-center ">
          {/* image */}
          <div className="   xl:absolute left-24 -top-48">
            <Image
              src="/cta/instagram-mock-Up.webp"
              alt=""
              height={300}
              width={300}
              priority
            />
          </div>

          {/* text */}
          <div className="flex flex-col gap-8 w-full items-end ">
            <h4 className="h4 max-w-xl text-right ">
              <span className="text-white text-nowrap">دکتر آرمین اکبری </span> <br />
              <br />
              را در شبکه های اجتماعی دنبال کنید
            </h4>
            <p className="subtitle sm:block hidden w-1/2 leading-loose text-right">
              برای دیدن نمونه کار ها و طرح سوالات احتمالی از دکتر و مشاوره قبل
              از عمل ما را در صفحه های اینستاگرام دنبال کنید و برای اگاهی از
              مطالب روز پزشکی با ما در ارتباط باشید
            </p>
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
              iconsStyles="text-primary dark:text-white/70 text-[20px] dark:hover:text-primary transition-all"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
