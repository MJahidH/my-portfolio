import { useState } from "react";
import data from "../projects-data.json";
import ProjectCard from "./ProjectCard";
import DropDownFilter from "./DropDownFilter";

const ProjectsList = () => {
  const [projects, setProjects] = useState(data);

  return (
    <div className="pt-20">
      <h1 className="pageMainSubheading">My Projects</h1>
      <DropDownFilter setProjects={setProjects} />
      <div
        className="
mt-5
mx-20
grid grid-cols-3
gap-x-16"
      >
        {projects.map((project, index) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsList;
