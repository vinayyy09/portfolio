import Link from "next/link";
import React from "react";
import moments from "../public/assets/projects/moments.png";
import go from "../public/assets/projects/go.png";
import mycoin from "../public/assets/projects/mycoin.png";
import pizza from "../public/assets/projects/pizza.png";
import tesla from "../public/assets/projects/tesla.png";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#de0f3f]">
          Projects
        </p>
        <h2 className="py-4">What I Have Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Moments Photography"
            backgroundImg={moments}
            projectUrl="/moments"
          />
          <ProjectItem
            title="Krusty's Pizzeria"
            backgroundImg={pizza}
            projectUrl="/pizza"
          />
          <ProjectItem
            title="Tesla Clone"
            backgroundImg={tesla}
            projectUrl="/tesla"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg={mycoin}
            projectUrl="/mycoin"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
