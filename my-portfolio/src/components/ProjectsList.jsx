import { useState } from "react";
import data from "../projects-data.json";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
  const [projects, setProjects] = useState(data);

  return (
    <div className="pt-20">
      <h1
        className="pageMainSubheading"
      >
        My Projects
      </h1>
      {projects.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
};

export default ProjectsList;
