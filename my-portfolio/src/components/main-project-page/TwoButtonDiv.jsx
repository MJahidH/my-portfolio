const TwoButtonDiv = ({ project }) => {
  
  
    const openInNewTab = (url) => {
    window.open(url, "_blank");
  };

  
  return (
    <div
      className={`
  h-1/3
  w-full
  border-4
 project.hostedLink
grid grid-cols-2
   gap-4`}
    >
      <button
        onClick={() => {
          openInNewTab(project.hostedLink);
        }}
        className="
    hostedLinkButton
    contactButtons"
      >
        Hosted website
      </button>
      <button
        onClick={() => {
          openInNewTab(project.githubLink);
        }}
        className="
    githubButton
    contactButtons
    "
      >
        Go to repo
      </button>
    </div>
  );
};

export default TwoButtonDiv;
