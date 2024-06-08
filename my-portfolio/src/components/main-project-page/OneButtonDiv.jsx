

const OneButtonDiv = ({project}) => {

    const openInNewTab = (url) => {
        window.open(url, "_blank");
      };

return (
    <div
    className={`
h-1/3
w-full
project.hostedLink
px-20
flex justify-center items-center
`}
  >

    <button
      onClick={() => {
        openInNewTab(project.githubLink);
      }}
      className="
  githubButton
  contactButtons
p-2
  h-1/2
  
  "
    >
      Go To Repo
    </button>
  </div>
);

}

export default OneButtonDiv