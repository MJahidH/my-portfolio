import { useState } from "react";

const FindMePage = () => {
  const myLinks = {
    linkedIn:
      "https://www.linkedin.com/in/jahid-hassan-34731529a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    github: "https://www.linkedin.com/feed/?trk=404_page",
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
<div className="
flex flex-row
mt-10
">

<button className="
contactButtons"
        onClick={() => {
          openInNewTab(links.linkedIn);
        }}
      >
        My LinkedIn
      </button>
      <button 
      className="contactButtons"
        onClick={() => {
          openInNewTab(links.github);
        }}
      >
        My Github
      </button>

      <button
      className="contactButtons"
       onClick={sendEmail}>Email Me</button>

</div>
    </div>
  );
};
export default FindMePage;
