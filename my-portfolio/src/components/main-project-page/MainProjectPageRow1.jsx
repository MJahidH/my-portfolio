import { useEffect, useState } from "react";
import TwoButtonDiv from "./TwoButtonDiv";
import OneButtonDiv from "./OneButtonDiv";

const MainProjectPageRow1 = ({ project }) => {
  const [imagePath, setImagePath] = useState("");
  const [technologies,setTechnologies] = useState([])

  useEffect(() => {
    if (project.imagePreview) {
      setImagePath(project.imagePreview);
    }
  }, [project.imagePreview]);


  useEffect(() => {
    if (project.tags) {
      setTechnologies([...project.tags])
    }
  }, [project.tags]);
  

  return (
    <div
      className="
  mt-20
  w-full
  border-4
  grid grid-cols-2"
    >
      <img src={`/assets/${imagePath}`} alt="Test Screenshot" />
      <div className="px-10">
        {project.hostedLink ? (
          <TwoButtonDiv project={project} />
        ) : (
          <OneButtonDiv project={project} />
        )}
        ˚<h2 className="text-center text-secondary text-4xl">Technologies:</h2>
        <ul
          className={`
        text-left
        ${technologies.length === 2 ? `grid grid-cols-2
        mt-4` : `grid grid-cols-3
        mt-4`}
        `}
        >
          {project.tags?.map((tech) => {
            return <li className="text-center text-3xl">{tech}</li>;
          })}
        </ul>
        <h2 className="text-center text-secondary text-4xl pt-6">Summary:</h2>
        <p className="text-left text-m pt-2">{project.description}</p>
      </div>
    </div>
  );
};

export default MainProjectPageRow1;
