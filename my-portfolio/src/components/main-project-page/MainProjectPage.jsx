import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projects from "../../projects-data.json";
import MainProjectPageRow1 from "./MainProjectPageRow1";
import MainProjectPageRow2 from "./MainProjectPageRow2";

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
    <div className="px-10 pb-20 ">
      <h1 className="text-secondary text-7xl pt-20">{project.title}</h1>
      <MainProjectPageRow1 project={project}/>
      <MainProjectPageRow2 project={project}/>

    </div>
  );
};

export default MainProjectPage;
