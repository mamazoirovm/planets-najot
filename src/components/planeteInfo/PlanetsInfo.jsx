import React, { useContext } from "react";

import sourceIcon from "../../assets/icon-source.svg";

import { DataToDisplay } from "../Mains";

const PlanetsInfo = ({ planetData }) => {
  const overview = (
    <>
      <h1 aria-label="planet name" className="planet-name">
        {planetData.name.toUpperCase()}
      </h1>
      <p aria-label="about planet overview" className="planet-content">
        {planetData.overview.content}
      </p>
    
    </>
  );

  const structure = (
    <>
      <h1 aria-label="planet name" className="planet-name">
        {planetData.name.toUpperCase()}
      </h1>
      <p aria-label="about planet structure" className="planet-content">
        {planetData.structure.content}
      </p>
     
    </>
  );

  const geology = (
    <>
      <h1 aria-label="planet name" className="planet-name">
        {planetData.name.toUpperCase()}
      </h1>
      <p aria-label="about planet geology" className="planet-content">
        {planetData.geology.content}
      </p>
      
    </>
  );

  const { data, setData } = useContext(DataToDisplay);

  return (
    <div className="planet-text-container">
      {(() => {
        if (data === "overview") {
          return overview;
        } else if (data === "structure") {
          return structure;
        } else return geology;
      })()}
    </div>
  );
};

export default PlanetsInfo;
