import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const [isMobileApp, setIsMobileApp] = useState(false);
  const navigate = useNavigate()

  const openInNewTab = (url) => {
    window.open(url, "_blank");

  };

  const test = ()=> {
    console.log(`hello world`)
  }

  return (
    <button onClick={() => {
navigate(`/projects/${project.id}`);
      }}>
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
            {project.imagePreview.map((image) => {
              return (
                <img
                  className="
  h-64
  w-[160px]"
                  src={`/assets/${image}`}
                  alt="Test Screenshot"
                />
              );
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
    </button>
  );
};

export default ProjectCard;
