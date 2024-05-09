import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/esm/Button";

function RealEstate() {
  return (
    <div style={{ padding: "50px" }}>
      <Alert variant="warning" style={{ width: "700px" }}>
        <Alert.Heading>Real Estate Information</Alert.Heading>
        <p>
          "Do you want to move out of your current home? Or do you need to find
          a house in Korea to work? However, obtaining information to find a
          house in a country where you and others use different languages ​​is
          not easy. We would like to introduce you to real estate agents who
          provide services in various languages. Selecting the desired area will
          make it easier for you to search."
          <br />
          <br />* Information provided by the Seoul Metropolitan Government.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button href="/realestate" variant="outline-success">
            More Info
          </Button>
        </div>
      </Alert>
    </div>
  );
}

export default RealEstate;
