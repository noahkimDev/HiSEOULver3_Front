/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

function MainImage(props) {
  return (
    <div>
      <div
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0)
  39%,rgba(0,0,0,0)
  41%,rgba(0,0,0,0.65)
  100%)`,
          height: "400px",
          backgroundImage: `url('${props.info.DP_MAIN_IMG}')`,
          width: "100%",
          backgroundColor: "#1c1c1c",
          backgroundSize: "100%, cover",
          backgroundPosition: "center, center",
          position: "relative",
        }}
      ></div>
    </div>
  );
}

export default MainImage;
