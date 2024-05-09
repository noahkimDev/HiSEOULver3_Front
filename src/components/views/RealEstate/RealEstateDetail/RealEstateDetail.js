/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

function RealEstateDetail() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ height: "100%", width: "100%" }}>
        <iframe
          src="https://land.seoul.go.kr/land/broker/globalbrokerInfo.do"
          // frameborder="4"
          id="iframeCss"
          style={{ padding: "60px", width: "80%", height: "90%" }}
        ></iframe>
      </div>
    </div>
  );
}

export default RealEstateDetail;
