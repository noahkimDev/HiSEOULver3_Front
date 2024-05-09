/* eslint-disable no-lone-blocks */
/* eslint-disable no-unreachable */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

import { useParams } from "react-router-dom";
import { EXHIBITION_API } from "../../config";
import axios from "axios";

import MainImage from "./sections/MainImage";
import ExhibitionDetail from "./sections/ExhibitionDetail";

function ExhibitionPage() {
  const { id } = useParams();

  const [Info, setInfo] = useState([]);

  useEffect(() => {
    const url = `http://openapi.seoul.go.kr:8088/${EXHIBITION_API}/json/EnglishListExhibitionOfSeoulMOAInfo/0/1/${id}`;
    axios
      .get(url) //
      .then((info) => {
        // console.log(info.data.EnglishListExhibitionOfSeoulMOAInfo.row[0]);
        setInfo(info.data.EnglishListExhibitionOfSeoulMOAInfo.row[0]);
      });
  }, []);
  return (
    <div>
      <MainImage info={Info}></MainImage>
      <ExhibitionDetail Info={Info} number={id}></ExhibitionDetail>
    </div>
  );
}

export default ExhibitionPage;
