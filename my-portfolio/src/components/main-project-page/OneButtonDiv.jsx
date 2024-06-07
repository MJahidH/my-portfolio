

const OneButtonDiv = ({project}) => {

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

flex justify-center items-center
`}
  >

    <button
      onClick={() => {
        openInNewTab(project.githubLink);
      }}
      className="
  githubButton
  w-1/2
  h-1-2
  "
    >
      Go to repo
    </button>
  </div>
);

}

export default OneButtonDiv