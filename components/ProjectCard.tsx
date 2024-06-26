"use client";

// next link
import Link from "next/link";

// next image
import Image from "next/image";

// shadcn ui
import { Card, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

// icons lucide react
import { Link2Icon } from "lucide-react";
import { Button } from "./ui/button";

type ProjectProps = {
  project: {
    image: string;
    image_befor?: string;
    image_after?: string;
    category: string;
    name?: string;
    description?: string;
    link: string;
  };
};

const ProjectCard = ({ project }: ProjectProps) => {
  return (
    <Card className="group xl:w-[400px] mx-auto overflow-hidden relative  ">
      <CardHeader className="p-0">
        {/* image */}
        <div
          className="relative xl:w-[450px] w-[300px] mx-auto h-[300px] flex items-center justify-center 
         bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden"
        >
          <Image
            className="absolute bottom-0 shadow-2xl "
            src={project.image}
            width={450}
            height={250}
            alt=""
            priority
          />
          {/* btns */}
          <div className="flex gap-x-4">
            <div
              className="bg-tertiary w-[54px] h-[54px] rounded-full flex justify-center items-center
                            scale-0 opacity-0 group-hover:scale-100
                            group-hover:opacity-100 transition-all duration-200"
            ></div>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6 text-right">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 right-1/3">
          {project.category}
        </Badge>
        <h4 className="h4 text-center mb-1">{project.name}</h4>
      </div>
    </Card>
  );
};

export default ProjectCard;
