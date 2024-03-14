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
    <div className="pt-20">
      <h1 className="pageMainSubheading">Find Me</h1>
      <div
        className="
flex flex-row
mt-10
mx-5
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
      text-white"
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
