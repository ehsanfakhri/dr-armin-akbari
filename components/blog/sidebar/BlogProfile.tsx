// components
import { Button } from "@/components/ui/button";
// next image
import Image from "next/image";

// icons react
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

const BlogProfile = () => {
  return (
    <section className=" px-8">
      <div className=" flex flex-col items-center gap-4">
        {/* image & date */}
        <div className="flex flex-col items-center sm:relative sm:right-0 my-10  absolute top-0 right-1/2">
          {/* image */}
          <div className="rounded-full ">
            <Image
              src={"/reviews/avatar-4.png"}
              alt=""
              width={100}
              height={100}
            />
          </div>
          {/* date */}
          <p className="mt-2">1402/12/05</p>
        </div>

        {/* button */}
        <Button
          variant={"destructive"}
          className="hidden lg:block rotate-90 my-10 "
        >
          پرسش از دکتر
        </Button>
        {/* share it */}
        <div className="hidden lg:flex items-center my-10">
          <div className="flex flex-col  justify-center gap-4 ">
            <FaWhatsapp size={40} color="green" />
            <FaTelegram size={40} color="blue" />
          </div>
          <p className="-rotate-90  text-xs  absolute right-1">اشتراک گذاری</p>
        </div>
      </div>
    </section>
  );
};

export default BlogProfile;
