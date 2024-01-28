import React, { useContext } from "react";
import { DataToDisplay } from "../Mains";
import "./Button.scss"
const Buttons = ({planetData}) => {
    // getting the state from useContect and then applying it to the component
    const {data, setData} = useContext(DataToDisplay)



    return (
        <div className="info-container">
        <div className="info-buttons-container">
            <div className="button-container">
                <button 
                aria-label="click to see overview"
                style={data === "overview" && window.innerWidth >= 768 ? {backgroundColor: planetData.color} : null} 
                onClick={() => setData("overview")}><strong>01</strong> OVERVIEW
                </button>
                <span style={data === "overview" ? {backgroundColor: planetData.color} : null} className="overview-line"></span>
            </div>
            <div className="button-container">
                <button 
                aria-label="click to see structure"
                style={data === "structure" && window.innerWidth >= 768 ? {backgroundColor: planetData.color} : null} 
                onClick={() => setData("structure")}> <strong>02</strong> Internal Structure
                </button>
                <span style={data === "structure" ? {backgroundColor: planetData.color} : null} className="overview-line"></span>
            </div>
            <div className="button-container">
                <button 
                aria-label="click to see surface"
                style={data === "surface" && window.innerWidth >= 768  ? {backgroundColor: planetData.color} : null} 
                onClick={() => setData("surface")}> <strong>03</strong>Surface Geology
                </button>
                <span style={data === "surface" ? {backgroundColor: planetData.color} : null} className="overview-line"></span>
            </div>
        </div>
            <span className="large-gray-line"></span>
        </div>
    )
}
export default Buttons