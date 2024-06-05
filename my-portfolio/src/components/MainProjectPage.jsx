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
    <div className="px-10 pb-20 ">
      <h1 className="text-secondary text-7xl pt-20">{project.title}</h1>
      <div
        className="
      mt-20
      w-full
      border-4
      grid grid-cols-2"
      >
        <img src={`/assets/${project.imagePreview}`} alt="Test Screenshot" />
        <div className="px-10">
          <div
            className={`
            h-1/3
            w-full
            border-4
             border-green-300
             ${
               project.hostedLink
                 ? `grid grid-cols-2
             gap-4`
                 : ``
             }
`}
          >
            <button className="border-4 border-pink-300">
              Visit Hosted website
            </button>
            <button className="border-4 border-pink-300">Go to repo</button>
          </div>
          <h2 className="text-left text-secondary text-4xl pt-4">
            Technologies:
          </h2>
          <ul className="text-left">
            {project.tags?.map((tech) => {
              return <li className="text-3xl">{tech}</li>;
            })}
          </ul>
          <h2 className="text-left text-secondary text-4xl pt-4">Summary:</h2>
          <p className="text-left text-m">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MainProjectPage;
