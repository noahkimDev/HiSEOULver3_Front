/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
"use client";

import "./HiseoulMapDetail.css";
import React, { useEffect, useState } from "react";
import NaverHiseoulMap from "./sections/NaverHiseoulMap/NaverHiseoulMap";

function HiseoulMapDetail() {
  return (
    <div id="container">
      <div id="map">
        <NaverHiseoulMap></NaverHiseoulMap>
      </div>
    </div>
  );
}

export default HiseoulMapDetail;
