const ProjectCard = ({ project }) => {
  console.log(project);

  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="border-gray-200
    mb-10
    py-5
    relative overflow-hidden
    bg-gradient-to-r from-primary to-gray-600">
      <h2 className="projectTitle">{project.title}</h2>
      <p className="projectSecondaryText">{project.description}</p>

      <ul>
        <h3 className="projectSecondaryText 
        pt-5
        text-3xl
        pb-3
        
        ">Technologies : </h3>
        {project.technologies.map((technology) => {
          return <li class className="projectSecondaryText
          py-1"> -   {technology}</li>;
        })}
      </ul>
      <button
      className="
      githubButton
      defaultHover
       "
        onClick={() => {
          openInNewTab(project.link);
        }}
      >
        View In Github
      </button>
    </div>
  );
};

export default ProjectCard;
