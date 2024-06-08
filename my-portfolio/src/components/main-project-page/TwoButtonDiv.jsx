const TwoButtonDiv = ({ project }) => {
  
  
    const openInNewTab = (url) => {
    window.open(url, "_blank");
  };

  
  return (
    <div
      className={`
  h-1/4
  w-full
  px-10
  mb-2

 project.hostedLink
grid grid-cols-2
   gap-10`}
    >
      <button
        onClick={() => {
          openInNewTab(project.hostedLink);
        }}
        className="
    hostedLinkButton
    contactButtons"
      >
        Hosted Website
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
        Go To Repo
      </button>
    </div>
  );
};

export default TwoButtonDiv;
