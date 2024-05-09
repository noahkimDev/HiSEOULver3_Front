/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import Accordion from "../Accordion/Accordion";
import "react-multi-carousel/lib/styles.css";
import "./CultureCarousel.css";
import axios from "axios";
import { EXHIBITION_API } from "../../../../config";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CultureCarousel = () => {
  const [ImgUrl, setImgUrl] = useState([]);

  const url = `http://openapi.seoul.go.kr:8088/${EXHIBITION_API}/json/EnglishListExhibitionOfSeoulMOAInfo/0/`;

  useEffect(() => {
    apiData();
  }, []);

  //! carousel data 가져오기
  async function apiData() {
    const firstAxios = await axios.get(
      "http://localhost:7000/api/data/seoulExhibitions"
    );
    // const firstAxios = await axios.get(url + 1);
    const maxData =
      firstAxios.data.result.EnglishListExhibitionOfSeoulMOAInfo
        .list_total_count + 1;

    const secondAxios = await axios.get(url + maxData);

    const rawData = secondAxios.data.EnglishListExhibitionOfSeoulMOAInfo.row;
    // const data = rawData.map((ele) => ele.DP_MAIN_IMG);
    // 전시일련번호 DP_SEQ
    setImgUrl(rawData);
    // console.log(ImgUrl);
  }

  return (
    <div className="parent">
      <Accordion></Accordion>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        // showDots={true}
        infinite={true}
        partialVisible={false}
        // dotListClass="custom-dot-list-style"
      >
        {ImgUrl &&
          ImgUrl.map((url, index) => {
            return (
              <div className="slider" key={index}>
                <a href={`/exhibition/${url.DP_SEQ}`}>
                  <img
                    src={url.DP_MAIN_IMG}
                    alt={url.DP_NAME}
                    style={{ height: "500px" }}
                  />
                </a>
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};
export default CultureCarousel;
