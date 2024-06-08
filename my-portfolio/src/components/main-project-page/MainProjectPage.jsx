import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projects from "../../projects-data.json";
import MainProjectPageRow1 from "./MainProjectPageRow1";
import MainProjectPageRow2 from "./MainProjectPageRow2";
import ImageCarousel from "./ImageCarousel";

const MainProjectPage = () => {
  const { project_id } = useParams();
  const [project, setProject] = useState({});
  const [carouselOpen, setCarouselOpen] = useState(false);

  useEffect(() => {
    const filteredProject = projects.filter((project) => {
      return project.id === project_id;
    });
    setProject(filteredProject[0]);
  }, []);



  return (
    <div className="w-full pb-20 border-4 border-green-500 ">
      {carouselOpen && <ImageCarousel carouselOpen={carouselOpen} setCarouselOpen={setCarouselOpen}/>}
      <h1 className="text-blue-200 font-bold text-7xl pt-20">{project.title}</h1>
      <MainProjectPageRow1 carouselOpen={carouselOpen} setCarouselOpen={setCarouselOpen} project={project}/>
      <MainProjectPageRow2 project={project} project_id={project_id}/>


    </div>
  );
};

export default MainProjectPage;
