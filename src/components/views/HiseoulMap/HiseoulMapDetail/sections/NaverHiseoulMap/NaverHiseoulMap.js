/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../../HiseoulMapDetail.css";
import { bringPharmacy, bringAnimalHospital } from "../bringData/bringData";

import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps";

function NaverHiseoulMap() {
  const [show, setShow] = useState(true);
  const [MyPosition, setMyPosition] = useState(false);
  const [PositionNum, setPositionNum] = useState([]);
  const [DataArray, setDataArray] = useState([]);
  const navermaps = useNavermaps();

  //! 좌표계 => 위/경도

  function Offcanvass() {
    // const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function myPosition() {
      navigator.geolocation.getCurrentPosition((data) => {
        const { latitude, longitude } = data.coords;
        // console.log(latitude, longitude);
        setPositionNum([latitude, longitude]);
      });
      if (MyPosition) {
        setMyPosition(false);
      } else {
        setMyPosition(true);
      }
    }
    return (
      <>
        <div style={{ display: "flex", alignItems: "center", padding: "18px" }}>
          <Button variant="outline-success" onClick={handleShow}>
            Look at the Map Topic
          </Button>
          <Button
            variant="secondary"
            style={{ marginLeft: "10px" }}
            onClick={myPosition}
          >
            my position
          </Button>
        </div>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div>
              <p>"We provide maps with various topics."</p>
              <Button
                onClick={async function () {
                  const data = await bringAnimalHospital();
                  setShow(false);
                  setDataArray(data);
                }}
                className="topicBtn"
              >
                Find Animal Hospitals
              </Button>
              <Button
                onClick={async function () {
                  const data = await bringPharmacy();
                  setShow(false);
                  setDataArray(data);
                  // console.log("wow", good);
                }}
                className="topicBtn"
              >
                Find Pharmacy
              </Button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

  return (
    <div>
      <Offcanvass></Offcanvass>
      <div style={{ paddingLeft: "18px", paddingRight: "18px" }}>
        <MapDiv
          style={{
            width: "100%",
            height: "800px",
          }}
        >
          <NaverMap
            defaultCenter={
              new navermaps.LatLng(37.531577648764795, 126.98169438780782)
            }
            defaultZoom={10}
          >
            {DataArray.map((ele, index) => {
              return (
                <Marker
                  key={index}
                  position={new navermaps.LatLng(ele.Y, ele.X)}
                  title={ele.BPLCNM}
                  clickable={true}
                />
              );
            })}
            {MyPosition && (
              <Marker
                position={new navermaps.LatLng(PositionNum[0], PositionNum[1])}
                title="My Place"
                icon={{
                  content: '<div style="color:red">My place</div>',
                }}
              ></Marker>
            )}
          </NaverMap>
        </MapDiv>
      </div>
    </div>
  );
}

//

export default NaverHiseoulMap;
