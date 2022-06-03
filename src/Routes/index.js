import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "../Pages/Home";
import Header from "../Components/Header";

const Routing = () => {

  return (
    <BrowserRouter>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default Routing