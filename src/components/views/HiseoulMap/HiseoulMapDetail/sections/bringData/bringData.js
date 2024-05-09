/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import axios from "axios";
import coordinateTransformation from "../coordinateTransformation/coordinateTransformation";

async function bringPharmacy() {
  const res = await axios.get("http://localhost:7000/api/data/pharmacyInfo", {
    withCredentials: true,
  });
  // console.log(res.data.pharmacies.LOCALDATA_010106.row);
  const array = res.data.pharmacies.LOCALDATA_010106.row;
  //! 폐업한 약국 제외
  const newArr = array.filter((ele) => ele.DTLSTATENM === "영업중");
  //! 좌표계 변환
  const newArr2 = newArr.map((ele, index) => {
    const newValue = coordinateTransformation(ele.X, ele.Y);
    return { ...ele, X: newValue.longitude, Y: newValue.latitude };
  });
  return newArr2;
}

async function bringAnimalHospital() {
  const res = await axios.get("http://localhost:7000/api/data/vetinfo", {
    withCredentials: true,
  });
  const array = res.data.vets.LOCALDATA_020301.row;
  let newArr = array.filter((ele) => ele.TRDSTATENM === "영업/정상");
  let newArr2 = newArr.map((ele) => {
    const newValue = coordinateTransformation(ele.X, ele.Y);
    return { ...ele, X: newValue.longitude, Y: newValue.latitude };
  });

  return newArr2;
}

export { bringPharmacy, bringAnimalHospital };
