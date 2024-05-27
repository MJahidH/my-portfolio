import { useState } from "react";
import data from "../projects-data.json";

const DropDownFilter = ({filteredArray}) => {

    const [dropDownOpen, setDropDownOpen] = useState(false);

  const filterKeyWords = [
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
      if (language === "React/React-Native") {
        return (
          project.tags.includes("React") ||
          project.tags.includes("React-Native")
        );
      } else if (language === "CSS/Tailwind CSS") {
        return (
          project.tags.includes("CSS") || 
          project.tags.includes("Tailwind CSS")
        );
      } else {
        return project.tags.includes(language);
      }
    });
    console.log(result);
  };

  return (
    <div
    className="
  absolute
  right-0
  pr-20
  z-20"
  >
    <button className="text-4xl" onClick={toggleDropDown}>
      Filter
    </button>
    {dropDownOpen && (
      <ul>
        {filterKeyWords.map((language) => {
          return (
            <li>
              <button
                onClick={() => {
                  handleItemClick(language);
                }}
                className="text-4xl"
              >
                {language}
              </button>
            </li>
          );
        })}
      </ul>
    )}
  </div>
  )

}

export default DropDownFilter