"use client";

// hook state
import { useState } from "react";

// shadcn ui
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";

// components
import ProjectCard from "@/components/ProjectCard";

// project data

const projectData = [
  {
    image: "/portfolios/portfolio-1/befor-after.jpg",
    image_befor: "/portfolios/portfolio-1/befor.jpg",
    image_after: "/portfolios/portfolio-1/after.jpg",
    category: "عمل بینی",
    name: "بینی استخوانی",
    description: "Lorem ipsun dolor sit amet consectetur adipisicing",
    link: "/",
  },
  {
    image: "/portfolios/portfolio-2/befor-after.jpg",
    image_befor: "/portfolios/portfolio-2/befor.jpg",
    image_after: "/portfolios/portfolio-2/after.jpg",
    category: "عمل بینی",
    name: "بینی گوشتی",
    description: "Lorem ipsun dolor sit amet consectetur adipisicing",
    link: "/",
  },
  {
    image: "/portfolios/portfolio-3/befor-after.jpg",
    image_befor: "/portfolios/portfolio-3/befor.jpg",
    image_after: "/portfolios/portfolio-3/after.jpg",
    category: " تزریق بوتاکس و ژل",
    description: "Lorem ipsun dolor sit amet consectetur adipisicing",
    link: "/",
  },
  {
    image: "/portfolios/portfolio-1/befor-after.jpg",
    image_befor: "/portfolios/portfolio-1/befor.jpg",
    image_after: "/portfolios/portfolio-1/after.jpg",
    category: "تزریق بوتاکس و ژل",
    name: "پوست",
    description: "Lorem ipsun dolor sit amet consectetur adipisicing",
    link: "/",
  },
];

// remove category duplicates
const uniqueCategories = [
  "نمونه کارها",
  "عمل بینی",
  "اتوپلاستی گوش",
  "عمل جلوآوردن چانه",
  "درمان آپنه خواب",
  " تزریق بوتاکس و ژل",
  " پولیپ بینی",
  "بلفاروپلاستی",
];

const ProjectPage = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState<string>("نمونه کارها");

  const filteredProjects = projectData.filter((project) => {
    // if category is "all projects" return all projects, else filter by category
    return category === "نمونه کارها" ? project : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          نمونه کارها
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList
            className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px]
          mb-12 mx-auto md:border dark:border-none"
          >
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  key={index}
                  value={category}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectPage;
