import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <ul
      className="w-full
    flex flex-row
    mt-20
    "
    >
      <button className=" navButton" onClick={() => navigate("/")}>
        Home
      </button>
      <button className=" navButton" onClick={() => navigate("/projects")}>
        My Projects
      </button>
      <button className=" navButton" onClick={() => navigate("/findme")}>
        Find Me
      </button>
    </ul>
  );
};

export default NavBar;
