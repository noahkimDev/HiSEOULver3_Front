/* eslint-disable no-unused-vars */
import React from "react";
import "bootswatch/dist/sketchy/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/views/Navbar/Navbar.js";
import LandingPage from "./components/views/LandingPage/LandingPage.js";
import ExhibitionPage from "./components/views/ExhibitionPage/ExhibitionPage.js";
import SignIn from "./components/views/SignIn/SignIn.js";
import SignUp from "./components/views/SignUp/SignUp.js";
import RealEstateDetail from "./components/views/RealEstate/RealEstateDetail/RealEstateDetail.js";

import HiseoulMapDetail from "./components/views/HiseoulMap/HiseoulMapDetail/HiseoulMapDetail.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" Component={LandingPage}></Route>
          <Route
            exact
            path="/exhibition/:id"
            Component={ExhibitionPage}
          ></Route>
          <Route exact path="/signin" Component={SignIn}></Route>
          <Route exact path="/signup" Component={SignUp}></Route>
          <Route exact path="/hiseoulmap" Component={HiseoulMapDetail}></Route>
          <Route exact path="/realestate" Component={RealEstateDetail}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
