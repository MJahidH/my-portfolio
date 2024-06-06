import fullDesc from "../../project-full-desc.json"

const MainProjectPageRow2 = ({ project }) => {
    return (
      <div
        className="
    mt-20
    w-full
    border-4
    grid grid-cols-2"
      >
        <div className="px-10 py-4">

          
          {fullDesc[`desc-11`].map((paragraph) => {
            return (<p className="text-left text-m pt-9">{paragraph}</p>)
          })}
        </div>
        <img src={`/assets/${project.imagePreview}`} alt="Test Screenshot" />
      </div>
    );
  };
  
  export default MainProjectPageRow2;
  