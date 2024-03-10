import { useState } from "react";

const FindMePage = () => {
    const myLinks = {
        linkedIn: "https://www.linkedin.com/in/jahid-hassan-34731529a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        github: "https://www.linkedin.com/feed/?trk=404_page",
        email: "jahidh2312@gmail.com"
      }
const [links,setLinks] = useState(myLinks)
  
    return (
    <>
      <h1>this is the contacts page</h1>
     <button>My LinkedIn</button>
     <button>My Github</button>
     <button >Email Me</button>
    </>
  );
};
export default FindMePage;
