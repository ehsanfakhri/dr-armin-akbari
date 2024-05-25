"use client";

// components
import Socials from "../../Socials";

const CopyRight = () => {
  return (
    <section className="bg-secondary py-1">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* copyright */}
          <div className="text-muted-foreground text-sm  ">
            Copyright &copy; ParrotWeb. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
};

export default CopyRight;
