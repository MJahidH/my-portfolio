import { useEffect, useState } from "react";
import TwoButtonDiv from "./TwoButtonDiv";
import OneButtonDiv from "./OneButtonDiv";

const MainProjectPageRow1 = ({ project }) => {

const [imagePath,setImagePath] = useState("")

useEffect(() => {
  if (project.imagePreview) {
   setImagePath(project.imagePreview)
  }
},[project.imagePreview])


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
        
        {project.hostedLink ? <TwoButtonDiv project={project}/> : <OneButtonDiv project={project}/>}
        
        


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
  );
};

export default MainProjectPageRow1;
