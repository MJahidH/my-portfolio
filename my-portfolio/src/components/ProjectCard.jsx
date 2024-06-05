import { useState } from "react";

const ProjectCard = ({ project }) => {
  const [isMobileApp, setIsMobileApp] = useState(false);

  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div
      className="
    mb-10

    py-5
    relative overflow-hidden
    bg-gradient-to-r from-primary to-gray-600
  
    "
    >
      {project.isMobileApp ? (
        <div className="mobilePreview">
{project.imagePreview.map((image)=> {
return (
  <img  className="
  h-64
  w-[16∆∆0px]"
  src={`/assets/${image}`} alt="Test Screenshot" />
)
})}
        </div>
      ) : (
        <img
          className=""
          src={`/assets/${project.imagePreview}`}
          alt="Test Screenshot"
        />
      )}
      <h2 className="projectTitle">{project.title}</h2>
    </div>
  );
};

export default ProjectCard;
