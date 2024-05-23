//components
import Form from "@/components/Form";

// icons lucide react
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

const ContactPage = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustration */}
        <div className="grid xl:grid-cols-2 pt-2 xl:h-[400px] mb-6 xl:mb-24">
          {/* illustration */}
          <div
            className="hidden xl:flex w-full bg-contact_illustration_light
          dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat "
          ></div>

          {/* text*/}
          <div className="flex flex-col items-end  text-right">
            <div className="flex  items-center justify-end  gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              با سلام
            </div>
            <h1 className="h1 max-w-md mb-8 ">تماس با ما</h1>
            <p className="subtitle max-w-[400px]">
              جهت دریافت مشاوره زیبایی و عمل بینی با ما در ارتباط باشید
            </p>
          </div>
        </div>

        {/* info text & form */}
        <div className="grid items-center justify-between xl:grid-cols-2 mb-24 xl:mb-32">
          <Form />

          {/* info text */}
          <div className="felx items-end flex-col text-right gap-y-4 xl:gap-y-24 mb-12 flex justify-end  text-base xl:text-lg ">
            {/* mail */}
            <div className="flex space-x-4 ">
              <div>yourmail@gmail.com</div>
              <MailIcon size={18} className="text-primary" />
            </div>
            {/* address */}
            <div className="flex space-x-4 ">
              <div>8420 Pine Avenue, Meadwville MC 842</div>
              <HomeIcon size={18} className="text-primary" />
            </div>
            {/* mail */}
            <div className="flex space-x-4 ">
              <div>+98 123 546 7890</div>
              <PhoneCall size={18} className="text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
