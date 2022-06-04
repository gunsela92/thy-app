import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "../Pages/Home";
import Header from "../Components/Header";
import FlightSelectionPage from "../Pages/FlightSelection";

const Routing = () => {

  return (
    <BrowserRouter>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/flight-selection/:origin/:destination/:personCount/:selectedClass" element={<FlightSelectionPage/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default Routing