import { useState } from "react";
import data from "../projects-data.json";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
  const [projects, setProjects] = useState(data);

  return (
    <>
      <h1>All Projects</h1>
      {projects.map((project) => {
        return (
          <ProjectCard project={project} />
        )
      })}
    </>
  );
};

export default ProjectsList;
