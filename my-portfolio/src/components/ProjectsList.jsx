import { useState } from "react";
import data from "../projects-data.json";
import ProjectCard from "./ProjectCard";
import DropDownFilter from "./DropDownFilter";

const ProjectsList = () => {
  const [projects, setProjects] = useState(data);
  

  const filteredArray = [];

  

  return (
    <div className="pt-20">
      <h1 className="pageMainSubheading">My Projects</h1>
      <DropDownFilter filteredArray={filteredArray}/>
      {projects.map((project, index) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </div>
  );
};

export default ProjectsList;
