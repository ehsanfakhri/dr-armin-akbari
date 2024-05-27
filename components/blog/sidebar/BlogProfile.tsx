// components
import { Button } from "@/components/ui/button";
// next image
import Image from "next/image";

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

const BlogProfile = () => {
  return (
    <section className=" px-8">
      <div className=" flex flex-col items-center gap-4">
        {/* image & date */}
        <div className="flex flex-col items-center sm:relative sm:right-0  absolute top-0 right-1/2">
          {/* image */}
          <div className="rounded-full  bg-black">
            <Image src={""} alt="" width={100} height={100} />
          </div>
          {/* date */}
          <p className="mt-2">1402/12/05</p>
        </div>

        {/* button */}
        <Button className="hidden lg:block rotate-90 my-10 ">
          پرسش از دکتر
        </Button>
        {/* share it */}
        <div className="hidden lg:flex items-center ">
          <div className="flex flex-col  justify-center gap-4 bg-tertiary">
            <PhoneCall size={40} />
            <PhoneCall size={40} />
          </div>
          <p className="-rotate-90  text-xs  absolute right-1">اشتراک گذاری</p>
        </div>
      </div>
    </section>
  );
};

export default BlogProfile;
