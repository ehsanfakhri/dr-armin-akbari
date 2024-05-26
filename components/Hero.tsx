"use client";

// next link
import Link from "next/link";
// shadcn ui
import { Button } from "./ui/button";
// icons lucide react
import { Clock, Send } from "lucide-react";

// icons react icons
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import { SlSocialInstagram } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { GiNoseSide } from "react-icons/gi";
import { GalleryThumbnails } from "lucide-react";

// components
import DrImg from "./MrImg";
import Badge from "./Badge";
import Socials from "./Socials";
import ShowPortfolio from "./ShowPortfolio";

const Hero = () => {
  return (
    <section
      className="py-12 mb-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat 
    bg-bottom bg-cover dark:bg-none"
    >
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-4">
          {/* image */}
          <div className="hidden xl:flex relative">
            {/* badge 1 */}
            <Badge
              containerStyles="absolute top-[5%] -left-[5rem] "
              icon={<GiNoseSide />}
              badgetext="عمل بینی"
            />
            {/* badge 2 */}
            <Badge
              containerStyles="absolute top-[50%] -left-[8rem]"
              icon={<GalleryThumbnails />}
              badgetext="نمونه کار"
            />
            {/* badge 3 */}
            <Badge
              containerStyles="absolute top-[55%] -right-20"
              icon={<RiTeamFill />}
              badgetext="مشاوره"
            />
            <div
              className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px]
             h-[500px] bg-no-repeat absolute -top-1 -right-2"
            ></div>

            <ShowPortfolio
              containerStyle="bg-hero_shape w-[510px] h-[462px] bg-no-repeat
            relative bg-bottom"
            />
          </div>

          {/* text */}
          <div
            className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0
          text-center xl:text-left"
          >
            <div className="text-sm sm:text-center font-semibold mb-4 text-primary  ">
              جراح و متخصص گوش و حلق و بینی
            </div>
            <h1 className="h2 sm:h1 xl:text-right text-nowrap mb-4">
              {" "}
              دکتر آرمین اکبری
            </h1>
            <p className="subtitle   max-w-[490px] mx-auto  xl:mx-0 xl:text-right text-center">
              متخصص گوش و حلق و بینی و جراحی زیبایی صورت و بینی، سینوس و
              اندوسکوپی، جراحی‌های اختلالات خواب و خروپف، جراحی‌های پروتز صورت
            </p>

            {/* show portfolio */}
            <div className="xl:hidden">
              <ShowPortfolio containerStyle=" " />
            </div>
            {/* buttons */}
            <div className="flex flex-col gap-y-3  gap-x-3 mx-auto xl:mx-0 xl:flex-row mb-12">
              <Link href="/contact">
                <Button className="gap-x-2 hidden sm:inline-flex">
                  مشاوره واتسپ
                  <FaWhatsapp size={18} />
                </Button>
              </Link>
              <Button
                variant={"destructive"}
                className="gap-x-2 hidden sm:inline-flex"
              >
                دریافت نوبت آنلاین
                <Clock size={18} />
              </Button>
            </div>
          </div>
        </div>

        {/* icon */}
        <div className="hidden xl:flex absolute left-2/4 bottom-44 xl:bottom-20 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
