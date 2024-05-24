"use client";

import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface IShowPortfolioProps {
  containerStyle?: string;
  imgSrc?: string;
}

const ShowPortfolio = ({ containerStyle }: IShowPortfolioProps) => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
  return (
    <div
      className={`${containerStyle} flex flex-col items-center justify-center`}
    >
      <Carousel
        plugins={[plugin.current]}
        className="w-full xl:max-w-xs max-w-60"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 1 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-4 ">
                    <Image
                      src={"/hero/befor-after-1.jpg"}
                      width={500}
                      height={500}
                      priority
                      alt=""
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-4 ">
                  <span className="text-4xl font-semibold">
                    <Image
                      src={"/hero/befor-after-2.jpg"}
                      width={500}
                      height={500}
                      priority
                      alt=""
                    />
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-4 ">
                  <span className="text-4xl font-semibold">
                    <Image
                      src={"/hero/befor-after-3.jpg"}
                      width={500}
                      height={500}
                      priority
                      alt=""
                    />
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ShowPortfolio;
