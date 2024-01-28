import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


// importing all pages
import Earth from "../Pages/Earth/Earth"
import Jupiter from "../Pages/Jupiter/Jupiter";
import Mercuriy from "../Pages/Mercuriy/Mercuriy";
import Venus from "../Pages/Venus/Venus";
import Mars from "../Pages/Mars/Mars";
import Saturn from "../Pages/Saturn/Saturn";
import Urans from "../Pages/Uran/Urans";
import Neptun from "../Pages/Neptun/Neptun";
import Navbar from "../components/Navbar"




const Router = () => {

// using reactRouter to handle different pages
    return (
            <>
            <BrowserRouter>
            <Navbar/>
            <Routes>
            <Route path="/"element={<Mercuriy/>}/>
            <Route path="venus" element={<Venus/>}/>
            <Route path="earth" element={<Earth/>}/>
            <Route path="mars" element={<Mars/>}/>
            <Route path="jupiter" element={<Jupiter/>}/>
            <Route path="saturn" element={<Saturn/>}/>
            <Route path="uranus" element={<Urans/>}/>
            <Route path="neptune" element={<Neptun/>}/>
            </Routes>
            </BrowserRouter>
            </>
    )
}

export default Router