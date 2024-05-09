import React from "react";
import Accordion from "react-bootstrap/Accordion";

function HiseoulMap() {
  return (
    <div>
      <Accordion defaultActiveKey="0" style={{ margin: "15px" }}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h3>HiSEOUL Map</h3>
          </Accordion.Header>
          <Accordion.Body style={{ fontSize: "25px" }} variant="success">
            When living in Seoul, there are times when I want to search for
            information based on my current location.
            <br />
            <br />
            HiSEOUL Map will provide various map information based on my current
            location, covering a range of topics. Moreover, it will assist in
            obtaining desired information using English alone.
            <br />
            <br />
            We hope that by utilizing the information obtained from our map, you
            can enhance convenience in your daily life through various map
            applications.
            <br />
            <br />
            <a href="/hiseoulmap">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Map_Seoul_districts_de.png"
                alt=""
                style={{
                  width: "900px",
                  height: "600px",
                  borderRadius: "500px",
                  maxWidth: "100%",
                }}
                title="Click!!"
              />
            </a>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default HiseoulMap;
