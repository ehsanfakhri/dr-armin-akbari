"use client";

// components
import MrImg from "./MrImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// icons lucide react
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import Image from "next/image";

// info data
const infoData = [
  { icon: <User2 size={20} />, text: "دکتر آرمین اکبری" },
  { icon: <PhoneCall size={20} />, text: "0912284733" },
  { icon: <MailIcon size={20} />, text: "info@drarminakbari.com" },
  { icon: <Calendar size={20} />, text: "تاریخ تولد " },
  {
    icon: <GraduationCap size={20} />,
    text: "متخصص گوش و حلق و بینی جراحی سرور گردن",
  },
];

interface IEducationData {
  university: string;
  qualification: string;
  years: string;
}

interface IExperienceData {
  company: string;
  role: string;
  years: string;
}

interface IQualificationData<T> {
  title: String;
  data: T[];
}

const qualificationData: IQualificationData<
  IEducationData | IExperienceData
>[] = [
  {
    title: "تخصص ها",
    data: [
      {
        university: "عمل جلو آردن چانه",
        qualification: "عقب بودن چانه",
        years: "2015 - 2018",
      },
      {
        university: "درمان آپنه خواب",
        qualification: "مشکل آپنه خواب",
        years: "2019 - 2021",
      },
      {
        university: "تزریق بوتاکس",
        qualification: "جوان سازی پوست",
        years: "2021 - 2025",
      },
    ],
  },
  {
    title: "تجربیات",
    data: [
      {
        company: "عمل بینی",
        role: "جراهی پلاستیک صورت",
        years: "استخوانی -فانتزی - گوشتی",
      },
      {
        company: "اتوپلاستی",
        role: "جراهی زیبایی گوش",
        years: "2020 - 2022",
      },
      {
        company: "بلفاروپلاستی",
        role: "جراحی زیبایی پلک",
        years: "2022 - Present",
      },
    ],
  },
];

interface ISkillsData {
  name: string;
}

interface IToolsData {
  imgPath: string;
}

interface ISkillData<T> {
  title: string;
  data: T[];
}

const skillData: ISkillData<ISkillsData | IToolsData>[] = [
  {
    title: "تخصص",
    data: [
      {
        name: " عمل جراحی بینی",
      },
      {
        name: "اتوپلاستی گوش",
      },
      {
        name: "عمل جلوآوردن چانه",
      },
      {
        name: "درمان آپنه",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (
    arr:
      | IQualificationData<IEducationData | IExperienceData>[]
      | ISkillData<ISkillsData | IToolsData>[],
    title: string
  ):
    | IQualificationData<IEducationData | IExperienceData>
    | ISkillData<ISkillsData | IToolsData>
    | undefined => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[760px]  ">
      <div className="container  mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          درباره دکتر آرمین اکبری
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <MrImg
              containerStyle="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/dr-akbari.webp"
            />
          </div>

          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-2 xl:max-w-full xl:border dark:border-none bg-primary-foreground">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  پروفایل
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  تجربیات
                </TabsTrigger>
              </TabsList>

              {/* tabs contents */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-right">
                    <h3 className="h3 my-4">
                      متخصص گوش و حلق و بینی جراحی سرو گردن
                    </h3>
                    <p className="subtitle max-w-full  p-2 xl:text-justify leading-loose ">
                      دکتر آرمین اکبری متخصص گوش و حلق و بینی و جراحی زیبایی
                      صورت و بینی، سینوس و اندوسکوپی، جراحی‌های اختلالات خواب و
                      خروپف، جراحی‌های پروتز صورت، بوتاکس و تزریق فیلر،
                      جراحی‌های سر و گردن، تیرویید و غدد بزاغی هستند. ایشان از
                      دکترای عمومی دانشگاه قزوین در سال ۱۳۹۲ فارغ التحصیل شدند و
                      پس از آن دوره تخصص خود را در رشته گوش، حلق و بینی و جراحی
                      سر و گردن در دانشگاه تهران آغاز نمودند. دکتر اکبری بورد
                      تخصصی خود را از دانشگاه تهران دریافت کردند و در حال حاضر
                      در قزوین و تهران مشغول به فعالیت هستند.
                    </p>
                    {/* icons */}
                    <div className="grid grid-col gap-4 mb-12">
                      {infoData.map((item, index) => (
                        <div
                          className="flex items-center gap-x-4 mx-auto "
                          key={index}
                        >
                          <div>{item.text}</div>
                          <div className="text-primary">{item.icon}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* qualifications */}
                </TabsContent>

                <TabsContent value="qualifications">
                  <div className="flex flex-col items-center">
                    <h3 className="h3 mb-8 py-6  ">تجربیات دکتر آرمین اکبری</h3>
                    {/* experience & education Wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8 ">
                      {/* experience */}
                      <div className="flex flex-col gap-y-12">
                        <div className="flex gap-x-4 items-center justify-end text-[22px] text-primary ">
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "تجربیات")?.title}
                          </h4>
                          <Briefcase size={28} />
                        </div>
                        {/* list */}
                        <div className="flex flex-col items-end gap-y-8">
                          {getData(qualificationData, "تجربیات")?.data.map(
                            (item, index) => {
                              const { company, role, years }: any = item;
                              return (
                                <div
                                  className="flex items-center  gap-x-8 group "
                                  key={index}
                                >
                                  <div className="text-right">
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div
                                      className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px]
                                    group-hover:translate-y-[84px] transition-all"
                                    ></div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>

                      {/* education */}
                      <div className="flex flex-col gap-y-12">
                        <div className="flex gap-x-4 items-center justify-end text-[22px] text-primary ">
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "تخصص ها")?.title}
                          </h4>
                          <GraduationCap size={28} />
                        </div>
                        {/* list */}
                        <div className="flex flex-col items-end gap-y-8">
                          {getData(qualificationData, "تخصص ها")?.data.map(
                            (item, index) => {
                              const { university, qualification, years }: any =
                                item;
                              return (
                                <div
                                  className="flex items-center gap-x-8 group "
                                  key={index}
                                >
                                  <div className="text-right">
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div
                                      className="w-[11px] h-[11px] rounded-full bg-primary absolute -right-[5px]
                                    group-hover:translate-y-[84px] transition-all"
                                    ></div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
