import React from "react";
import projectsData from "../data/projects.json";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";

export default function BentoGridDemo() {
  return (
    <>
      <div className="border-solid h-full w-full my-96 relative h-full">
        <div className="text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl flex justify-center items-center">
          <p className="mb-32">
            things i <span className="text-indigo-500">made</span>...
          </p>
        </div>
        <BentoGrid className="mx-auto order-solid px-8">
          {projectsData.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              className=""
              imageURI={item.imageURI}
              frameworks={item.frameworks}
              github={item.github}
              demo={item.demo}
            />
          ))}
        </BentoGrid>
      </div>
    </>
  );
}
