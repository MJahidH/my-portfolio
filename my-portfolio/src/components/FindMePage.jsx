import { useState } from "react";

const FindMePage = () => {
  const myLinks = {
    linkedIn:
      "https://www.linkedin.com/in/jahid-hassan-34731529a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    github: "https://github.com/MJahidH?tab=repositories",
    email: "jahidh2312@gmail.com",
  };
  const [links, setLinks] = useState(myLinks);

  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };

  const sendEmail = () => {
    window.location.href = `mailto:${links.email}`;
  };

  return (
    <div className="
    pt-20
    w-full
    h-full
    ">
      <h1 className="pageMainSubheading">Find Me</h1>
      <h1 className="
      block sm:hidden
      text-secondary">Scroll Right -&gt;  </h1>
      <div
        className="
flex flex-row
overflow-y-auto
h-full
mt-5
mx-5
mb-10
"
      >
        <button
          className="
contactButtons
bg-blue-600
text-white
"
          onClick={() => {
            openInNewTab(links.linkedIn);
          }}
        >
          LinkedIn
        </button>
        <button
          className="contactButtons
      bg-black
      text-white
      mx-5"
          onClick={() => {
            openInNewTab(links.github);
          }}
        >
          Github
        </button>

        <button
          className="contactButtons
      bg-green-700
      text-white"
          onClick={sendEmail}
        >
          Email Me
        </button>
      </div>
    </div>
  );
};
export default FindMePage;
