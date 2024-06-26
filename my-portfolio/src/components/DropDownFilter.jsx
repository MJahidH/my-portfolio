import { useState } from "react";
import data from "../projects-data.json";

const DropDownFilter = ({ setProjects }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [filterTitle, setFilterTitle] = useState("All");

  const filterKeyWords = [
    "All",
    "JavaScript",
    "React/React-Native",
    "TypeScript",
    "CSS/Tailwind CSS",
    "Python",
  ];

  const toggleDropDown = () => {
    setDropDownOpen(!dropDownOpen);
  };

  const handleItemClick = (language) => {
    const result = data.filter((project) => {
      if (language === "All") {
        return data;
      } else if (language === "React/React-Native") {
        return (
          project.tags.includes("React") ||
          project.tags.includes("React-Native")
        );
      } else if (language === "CSS/Tailwind CSS") {
        return (
          project.tags.includes("CSS") || project.tags.includes("Tailwind CSS")
        );
      } else {
        return project.tags.includes(language);
      }
    });
    setProjects([...result]);
    setDropDownOpen(!dropDownOpen);
    setFilterTitle(language);
  };

  return (
    <div
      className="
  absolute
  right-0
  pr-20
  mr-10
  mt-[-100px]
  z-20
  bg-black

  
"
    >
      <div
        className="
      relative
     items-center
      justify-start
      text-left
      bg-black"
      >
        <button
          className="py-2 rounded-lg item-center text-4xl text-white"
          onClick={toggleDropDown}
        >
          Filter : {filterTitle}
        </button>
        {dropDownOpen && (
          <ul
            className="
          absolute 
          left-0
          mr-6
          pr-6
          bg-black"
          >
            {filterKeyWords.map((language) => {
              return (
                <li>
                  <button
                    onClick={() => {
                      handleItemClick(language);
                    }}
                    className="drop-down-button"
                  >
                    {language}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropDownFilter;
