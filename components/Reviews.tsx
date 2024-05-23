"use client";

// next image
import Image from "next/image";

// shadcn ui
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";

// reviwes data
const reviwesData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "زهرا امانی",
    job: "Chef",
    review:
      "همسر من مشکل خر و پف داشت شبا به شدت خروپف میکرد یکی از دوستانمون ارمین اکبری رو بهمون معرفی کرد و همسرم الان بهبود پیدا کرده خداروشکر دکتر خیلی خوبی بود",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "نیما خوشرو",
    job: "Interor Designer",
    review:
      "من خیلی تو قزوین دنبال یه دکتر خوب برای عمل زیبایی گوش گشتم تا اینکه یکی از دوستام دکتر ارمین اکبری رو بهم معرفی کرد واقعا خوشحالم که پیش ایشون عمل کردم",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "تارا",
    job: "Game Dev",
    review:
      "من برام خیلی مهمه که برای تزریق بوتاکس حتما برم پیش یه دکتر خوب همیشه ام میرم پیش ارمین اکبری چون خیلی کارش خوبه هم موندگاریش بیشتره",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "نیاز ستایشی",
    job: "Therapist",
    review:
      "من خودم خیلی طرفدار عمل نیستم ولی برادرم که انجام داده خیلی خوب شده قبل عمل گوشاش واقا بزرگ و بد فرم بود اسم دکتریم که برای جراحی پیشش رفته ارمین اکبری بود",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-40">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 p-8 text-center mx-auto">
          نظرات کاربران
        </h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]"
        >
          {reviwesData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-primary-foreground dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10 ">
                    <div className="flex items-center justify-end gap-x-4">
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                      </div>
                      {/* image */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                      />
                      {/* name */}
                    </div>
                  </CardHeader>
                  <CardDescription className="text-sm leading-loose text-justify  text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
