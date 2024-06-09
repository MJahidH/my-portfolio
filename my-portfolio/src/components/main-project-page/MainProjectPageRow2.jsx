import { useEffect, useState } from "react";
import fullDesc from "../../project-full-desc.json";

const MainProjectPageRow2 = ({
  project,
  project_id,
  carouselOpen,
  setCarouselOpen,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleCarouselClick = () => {
    setCarouselOpen(!carouselOpen);
  };

  return (
    <div
      className="
    mt-10
    w-full
    px-10

    grid grid-cols-2"
    >
      <div className=" py-4">
        <button
          onClick={() => {
            handleCarouselClick();
          }}
          className="
    bg-red-500
        w-1/3
        py-2
        mb-10

        text-4xl
        text-white
        rounded-3xl

        "
        >
          View All Images
        </button>

        {fullDesc[`desc-${project_id}`].map((paragraph) => {
          return (
            <p className="text-left text-m pt-2 text-white">{paragraph}</p>
          );
        })}
      </div>
      <img src={`/assets/${project.allImages[1]}`} alt="Test Screenshot" />
    </div>
  );
};

export default MainProjectPageRow2;
