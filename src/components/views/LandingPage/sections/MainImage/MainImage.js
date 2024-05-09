import React from "react";
import Image from "react-bootstrap/Image";
import mainImg from "../Seoul-attractions-Bukchon-Hanok-Village.jpg";
import Form from "react-bootstrap/Form";

function MainImage() {
  return (
    // <div styl={{ padding: "60px" }}>
    <div
      style={{
        padding: "60px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "50%", minWidth: "500px", marginBottom: "80px" }}>
        <Image
          src={mainImg}
          fluid
          style={{ borderRadius: "190px", width: "100%" }}
        />
      </div>
      <div
        style={{
          paddingLeft: "70px",
          width: "50%",
          minWidth: "500px",
        }}
      >
        <Form.Text id="passwordHelpBlock" muted>
          <h1>HiSEOUL</h1>
          <br />
          <p style={{ fontSize: "32px" }}>
            Hello and welcome. You may have experienced inconvenience due to not
            being able to obtain necessary information while living in Seoul.
            <br />
            <br />
            Therefore, we aim to provide various information about Seoul. We
            will not only provide tourist information but also essential
            information for daily life
            <br />
            <br />
            Finally, we hope that through our website, your life in Korea
            becomes happier and more convenient.Nice to meet you. Welcome to
            this simple website.
          </p>
        </Form.Text>
      </div>
    </div>
    // </div>
  );
}
export default MainImage;
