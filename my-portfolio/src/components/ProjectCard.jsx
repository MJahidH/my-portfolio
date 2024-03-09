const ProjectCard = ({ project }) => {
  console.log(project);

  const openInNewTab = (url) => {
window.open(url,"_blank")
  }

  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      
      <ul>
      <h3>Technologies : </h3>
      {project.technologies.map((technology)=>{
        return (<li>{technology}</li>)
      })}
      </ul>
      <button onClick={()=>{openInNewTab(project.link)}}>View In Github</button>
    </div>
  );
};

export default ProjectCard;
