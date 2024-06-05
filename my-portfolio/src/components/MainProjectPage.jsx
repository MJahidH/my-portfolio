import React from "react"
import { useParams } from "react-router-dom";

const MainProjectPage = () => {

    const {project_id} = useParams()
    console.log(project_id)
   

   return (
<div>
<h1 className="text-secondary
    text-7xl
    pt-20
    ">thi is the main projects id : {project_id}</h1>
</div>
   )
}

export default MainProjectPage