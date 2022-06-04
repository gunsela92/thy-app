import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "../Pages/Home";
import Header from "../Components/Header";
import FlightSelectionPage from "../Pages/FlightSelection";
import ResultPage from "../Pages/Result";

const Routing = () => {

  return (
    <BrowserRouter>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/flight-selection/:origin/:destination/:personCount/:selectedClass" element={<FlightSelectionPage/>}/>
          <Route path="/result/:result/:price" element={<ResultPage/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default Routing