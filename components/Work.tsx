"use client";

// next link
import Link from "next/link";

// shadcn ui
import { Button } from "./ui/button";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "@/components/ProjectCard";
import ShowPortfolio from "./ShowPortfolio";

const projectData = [
  {
    image: "/portfolios/portfolio-1/befor-after.jpg",
    image_befor: "/portfolios/portfolio-1/befor.jpg",
    image_after: "/portfolios/portfolio-1/after.jpg",
    category: "عمل جراحی بینی",
    name: "بینی استخوانی",
    description: "Lorem ipsun dolor sit amet consectetur adipisicing",
    link: "/",
  },
  {
    image: "/portfolios/portfolio-2/befor-after.jpg",
    image_befor: "/portfolios/portfolio-2/befor.jpg",
    image_after: "/portfolios/portfolio-2/after.jpg",
    category: "عمل جراحی بینی",
    name: "بینی گوشتی",
    description: "Lorem ipsun dolor sit amet consectetur adipisicing",
    link: "/",
  },
  {
    image: "/portfolios/portfolio-3/befor-after.jpg",
    image_befor: "/portfolios/portfolio-3/befor.jpg",
    image_after: "/portfolios/portfolio-3/after.jpg",
    category: "تزریق ژل",
    name: "پوست",
    description: "Lorem ipsun dolor sit amet consectetur adipisicing",
    link: "/",
  },
  {
    image: "/portfolios/portfolio-1/befor-after.jpg",
    image_befor: "/portfolios/portfolio-1/befor.jpg",
    image_after: "/portfolios/portfolio-1/after.jpg",
    category: "تزریق ژل",
    name: "پوست",
    description: "Lorem ipsun dolor sit amet consectetur adipisicing",
    link: "/",
  },
  {
    image: "/portfolios/portfolio-1/befor-after.jpg",
    image_befor: "/portfolios/portfolio-1/befor.jpg",
    image_after: "/portfolios/portfolio-1/after.jpg",
    category: "react js",
    name: "Envision Website",
    description: "Lorem ipsun dolor sit amet consectetur adipisicing",
    link: "/",
  },
  {
    image: "/portfolios/portfolio-1/befor-after.jpg",
    image_befor: "/portfolios/portfolio-1/befor.jpg",
    image_after: "/portfolios/portfolio-1/after.jpg",
    category: "react js",
    name: "Serenity Website",
    description: "Lorem ipsun dolor sit amet consectetur adipisicing",
    link: "/",
  },
  {
    image: "/portfolios/portfolio-1/befor-after.jpg",
    image_befor: "/portfolios/portfolio-1/befor.jpg",
    image_after: "/portfolios/portfolio-1/after.jpg",
    category: "fullstack",
    name: "Nova Website",
    description: "Lorem ipsun dolor sit amet consectetur adipisicing",
    link: "/",
  },
  {
    image: "/portfolios/portfolio-1/befor-after.jpg",
    image_befor: "/portfolios/portfolio-1/befor.jpg",
    image_after: "/portfolios/portfolio-1/after.jpg",
    category: "fullstack",
    name: "Zenith Website",
    description: "Lorem ipsun dolor sit amet consectetur adipisicing",
    link: "/",
  },
];
const Work = () => {
  return (
    <section className=" h-[1000px]  bg-primary-foreground  ">
      <div className="container mx-auto w-full">
        <div className="flex flex-col items-center  ">
          {/* text */}
          <div
            className="max-w-[400px] mx-auto  text-center
        xl:text-center mb-12 flex flex-col 
        "
          >
            <h2 className="section-title  dark:bg-primary mx-auto my-4">
              آخرین نمونه کارها
            </h2>
            <span className="font-semibold p-8 text-primary text-xl">
              زیبا شدن سخت نیست
            </span>
            <p className="subtitle mb-4 ">
              دکتر آرمین اکبری تا کنون خدمات گوش و حلق و بینی و جراحی زیبایی
              صورت و بینی، سینوس و اندوسکوپی، جراحی های سر و گردن تیرویید غدد
              بزاغی را ارائه داده است
            </p>
            <Link href="/projects">
              <Button>نمونه کارها</Button>
            </Link>
          </div>

          {/* slider */}
          <div className="max-w-full  ">
            <Swiper
              className="h-[480px] "
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1400: {
                  slidesPerView: 3,
                },
              }}
              spaceBetween={30}
              modules={[Pagination]}
              pagination={{ clickable: true }}
            >
              {/* show only the frist 4 projects for the slides */}
              {projectData.slice(0, 4).map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <ProjectCard project={project} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
