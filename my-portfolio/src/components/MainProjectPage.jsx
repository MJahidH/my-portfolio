import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projects from "../projects-data.json";

const MainProjectPage = () => {
  const { project_id } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    const filteredProject = projects.filter((project) => {
      return project.id === project_id;
    });
    setProject(filteredProject[0]);
  }, []);

  return (
    <div>
      <h1 className="text-secondary text-7xl pt-20">{project.title}</h1>
    </div>
  );
};

export default MainProjectPage;
