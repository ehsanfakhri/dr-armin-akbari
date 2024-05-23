"use client";

// icons lucide react
import { GanttChartSquare, Blocks, Gem } from "lucide-react";

import IconBini from "@/public/services/icon-amale-bini-1.svg";
import IconOtopelasti from "@/public/services/icon-otopelasti.svg";
import IconChane from "@/public/services/icon-chane.svg";
import IconApneh from "@/public/services/icon-apneh.svg";
import IconTazrighBootaks from "@/public/services/icon-tazrigh-bootaks.svg";
import IconTazrighJel from "@/public/services/icon-tazrigh-jel.svg";
import IconPolip from "@/public/services/icon-amale-bini-2.svg";
import IconBelfaropelasti from "@/public/services/icon-belfaropelasti.svg";

// shadcn ui card
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// components
import Image from "next/image";

// service data
const servicesData = [
  {
    icon: <Image height={72} width={72} alt="" priority src={IconBini} />,
    title: "عمل جراحی بینی",
    description:
      "جراحی بینی یکی از محبوب ترین عمل های جراحی در کشور ما است. این عمل جراحی ممکن است هم جنبه های درمانی و هم جنبه های زیبایی داشته باشد",
  },
  {
    icon: <Image height={72} width={72} alt="" priority src={IconOtopelasti} />,
    title: "اتو پلاستی",
    description:
      "اتوپلاستی یا جراحی زیبایی گوش عملی برای تغییر شمل، موقعیت و یا اندازه گوش است. همچنین اگر شما به صورت مادرزادی دچار آسیب های گوش",
  },
  {
    icon: <Image height={72} width={72} alt="" priority src={IconChane} />,
    title: "عمل جلو آوردن چانه",
    description:
      "عقب بودن چانه یکی از نواقص ظاهری محسوب می شود که باعث کاهش اعتماد به نفس می شود. هدف از عمل جراحی جلو آوردن چانه برقراری توازن",
  },
  {
    icon: <Image height={72} width={72} alt="" priority src={IconApneh} />,
    title: "درمان آپنه خواب",
    description:
      "یکی از روش های درمانی برای کسانی است که با مشکل آپنه خواب مواجه هستند عمل جراحی است. برخی از آزمایشات کم تهاجمی و برخی بسیار پیچیده و.",
  },
  {
    icon: (
      <Image height={72} width={72} alt="" priority src={IconTazrighBootaks} />
    ),
    title: "تزریق بوتاکس",
    description:
      "تزریق بوتاکس به نواحی دارای چین و چروک صورت با هدف جوانسازی پوست انجام می شود. تزریق بوتاکس خط خنده و همین طور بوتاکس پیشانی یا",
  },
  {
    icon: <Image height={72} width={72} alt="" priority src={IconPolip} />,
    title: "آندوسکوپیک پولیپ بینی",
    description:
      "آندوسکوپی بینی روشی است برای تشخیص بیماری ویا حتی درمان بیماری که از طریق مشاهده بینی با دستگاهی به نام آندوسکوپ انجام می شود",
  },
  {
    icon: <Image height={72} width={72} alt="" priority src={IconTazrighJel} />,
    title: "تزریق ژل",
    description:
      "یکی کارهایی که در زیبایی و جوان‌سازی پوست و فرم دهی صورت و بدن تأثیر بسزایی دارد، تزریق ژل و انواع فیلر است. تزریق فیلر در واقع نوعی درمان",
  },
  {
    icon: (
      <Image height={72} width={72} alt="" priority src={IconBelfaropelasti} />
    ),
    title: "بلفاروپلاستی",
    description:
      "عمل بلفاروپلاستی یا همان جراحی زیبایی پلک باعث از بین رفتن علائم پیری در چشم ها می شود و به چهره ی فرد متقاضی شادابی و نشاط می بخشد",
  },
];

const Services = () => {
  return (
    <section className=" xl:pb-8  ">
      <div className="container mx-auto mb-20">
        <h2 className="section-title mb-12 py-4  xl:mb-24 text-center mx-auto">
          خدمات ما
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-4 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[250px] flex flex-col pt-16 pb-10
                justify-center items-center bg-primary-foreground dark:bg-secondary/40 relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div
                    className="flex justify-center items-center w-[80px] h-[80px]
                   bg-primary-foreground dark:bg-secondary-foreground"
                  >
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
