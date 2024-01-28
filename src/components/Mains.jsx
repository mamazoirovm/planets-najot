import InfoButtons from "../components/infos/Buttons"
import Statistics from "../components/stats/Statistic";
import PlanetInfo from "../components/planeteInfo/PlanetsInfo";
import PlanetImage from "../components/planete/Planete";
import { createContext } from "react";
import { useState } from "react";

export const DataToDisplay = createContext();

const Main = ({ planetData }) => {
  const [data, setData] = useState("overview");

  return (
    <main>
      <DataToDisplay.Provider value={{ data, setData }}>
        <InfoButtons planetData={planetData} />
        <PlanetImage planetData={planetData} />
        <PlanetInfo planetData={planetData} />
        <Statistics planetdata={planetData} />
      </DataToDisplay.Provider>
    </main>
  );
};

export default Main;
