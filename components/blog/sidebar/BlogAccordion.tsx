import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// icons lucide react
import { Instagram } from "lucide-react";

const BlogAccordion = () => {
  return (
    <section className="hidden h-full lg:block px-8 ">
      <div className="bg-primary-foreground rounded-md px-4 py-2 ">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="">
              <h4 className="h4">فهرست محتوا </h4>
            </AccordionTrigger>
            <AccordionContent>
              آیا جراحی باید به تعویق بیوفتد *<br />
              آیا جراحی باید به تعویق بیوفتد *<br />
              آیا جراحی باید به تعویق بیوفتد *<br />
              آیا جراحی باید به تعویق بیوفتد *<br />
              آیا جراحی باید به تعویق بیوفتد *<br />
              آیا جراحی باید به تعویق بیوفتد *<br />
              آیا جراحی باید به تعویق بیوفتد *<br />
              آیا جراحی باید به تعویق بیوفتد *<br />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex items-center text-[10px] p-2 rounded-md gap-2 bg-gradient-to-r from-blue-500 to-pink-600 ">
          <div className="w-full min-w-28 text-right">
            <p className="text-background ">اینستاگرام</p>
            <p className="text-background">نمونه کار و رضایت بیمار</p>
          </div>
          <Instagram className="text-background" size={30} />
        </div>
      </div>
    </section>
  );
};

export default BlogAccordion;
