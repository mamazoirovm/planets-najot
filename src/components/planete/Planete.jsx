import React, { useContext } from "react";

import { DataToDisplay } from "../Mains";

import "./planete.scss"
const Planete = ({planetData}) => {

    const {data, setData} = useContext(DataToDisplay)

    const overview = <><img alt="planet" className="planet-image" src={planetData.overview.image}></img></>
    const structure = <><img alt="planet" className="planet-image" src={planetData.structure.image}></img></>
    const geology = <>
    <img alt="planet" className="planet-image" src={planetData.overview.image}></img>
    <img alt="planet surface" className="planet-surface-image" src={planetData.geology.image}></img>
    </>
    return (
       <>
        {(() => {
                if (data === "overview"){
                    return (overview)
                }
                else if (data === "structure"){
                    return (structure)
                }
                else return (geology)
            })()}
        </>
    )
}

export default Planete