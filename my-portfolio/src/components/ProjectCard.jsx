const ProjectCard = ({ project }) => {


  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="
    mb-10
    border-4
    border-yellow-500
    py-5
    relative overflow-hidden
    bg-gradient-to-r from-primary to-gray-600
    ">
      <h2 className="projectTitle">{project.title}</h2>

    </div>
  );
};

export default ProjectCard;
