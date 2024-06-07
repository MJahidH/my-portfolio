import { useEffect, useState } from "react";

const MainProjectPageRow1 = ({ project }) => {

const [imagePath,setImagePath] = useState("")

useEffect(() => {
  if (project.imagePreview) {
   setImagePath(project.imagePreview)
  }
},[project.imagePreview])


const openInNewTab = (url) => {
  window.open(url, "_blank");
};

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
        <div
          className={`
        h-1/3
        w-full
        border-4
         ${
           project.hostedLink
             ? `grid grid-cols-2
         gap-4`
             : ``
         }
`}
        >
          <button onClick={() => {
            openInNewTab(project.hostedLink)
          }} 
          className="
          hostedLinkButton">
             Hosted website
          </button>
          <button onClick={() => {
            openInNewTab(project.githubLink)
          }} className="
          githubButton
          ">Go to repo</button>
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
  );
};

export default MainProjectPageRow1;
