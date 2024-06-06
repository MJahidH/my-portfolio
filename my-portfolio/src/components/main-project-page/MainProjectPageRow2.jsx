import { useEffect, useState } from "react";
import fullDesc from "../../project-full-desc.json"

const MainProjectPageRow2 = ({ project,project_id }) => {

    const [loading,setLoading] = useState(true)


    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false)
        },500)

        return () => {
            clearTimeout(timer)
        }
    },[])

    if (loading) {
     return( <div>Loading...</div>   )
    }

    return (
      <div
        className="
    mt-20
    w-full
    border-4
    grid grid-cols-2"
      >
        <div className="px-10 py-4">

          
          {fullDesc[`desc-${project_id}`].map((paragraph) => {
            return (<p className="text-left text-m pt-9">{paragraph}</p>)
          })}
        </div>
        <img src={`/assets/${project.allImages[1]}`} alt="Test Screenshot" />
      </div>
    );
  };
  
  export default MainProjectPageRow2;
  