// components
import BlogAccordion from "@/components/blog/sidebar/BlogAccordion";
import BlogProfile from "@/components/blog/sidebar/BlogProfile";

const PostBlog = () => {
  return (
    <section className="min-h-screen pt-12 ">
      <div className="container mx-auto">
        <div className="relative flex flex-col-3 justify-between  ">
          {/* blog Accordion */}
          <div>
            <BlogAccordion />
          </div>
          {/* blog content */}
          <div className="bg-primary w-[60%] sm:mt-0 mt-32">
            <div>blog content</div>
          </div>
          {/* blog profile */}
          <div className="sm:block">
            <BlogProfile />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostBlog;
