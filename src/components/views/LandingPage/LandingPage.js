import React from "react";
import "./LandingPage.css";
import MainImage from "./sections/MainImage/MainImage";
import CultureCarousel from "./sections/CultureCarousel/CultureCarousel";
import MustDownloadApp from "../MustDownloadApp/MustDownloadApp";
import RealEstate from "../RealEstate/RealEstate";
import HiseoulMap from "../HiseoulMap/HiseoulMap";

function LandingPage() {
  return (
    <>
      <div>
        <MainImage></MainImage>
        <CultureCarousel></CultureCarousel>
        <div className="second">
          <MustDownloadApp></MustDownloadApp>
          <HiseoulMap></HiseoulMap>
        </div>
        <RealEstate></RealEstate>
        <div className="second"></div>
      </div>
    </>
  );
}

export default LandingPage;
