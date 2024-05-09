/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
function Navibar() {
  const navigate = useNavigate();
  let userName = window.localStorage.getItem("userName");

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/users/tokenChk", {
        withCredentials: true,
      }) //
      .then((res) => {
        if (!res.data.login) {
          //! refreshToken, accessToken이 만료된 경우
          window.localStorage.setItem("userName", "");
          window.localStorage.setItem("userId", "");
        }
      });
  }, []);
  //
  const logoutFunc = () => {
    axios
      .get(
        "http://localhost:7000/api/users/logout", //
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        // console.log(res);
        if (res.data.success) {
          window.localStorage.setItem("userName", "");
          window.localStorage.setItem("userId", "");
          navigate("/");
        }
      });
  };
  return (
    <>
      {userName !== "" ? (
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">HiSEOUL</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link onClick={logoutFunc}>logout</Nav.Link>
              <NavDropdown title="More Info" id="basic-nav-dropdown">
                <NavDropdown.Item href="/hiseoulmap">
                  HiSEOUL Map
                </NavDropdown.Item>
                <NavDropdown.Item href="/realestate">
                  Real Estate
                </NavDropdown.Item>

                <NavDropdown.Divider />
              </NavDropdown>
              <Nav.Link disabled style={{ color: "cadetblue" }}>
                WELCOME
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      ) : (
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">HiSEOUL</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/signin">Sign In</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
              <NavDropdown title="More Info" id="basic-nav-dropdown">
                <NavDropdown.Item href="/hiseoulmap">
                  HiSEOUL Map
                </NavDropdown.Item>
                <NavDropdown.Item href="/realestate">
                  Real Estate
                </NavDropdown.Item>

                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
          </Container>
        </Navbar>
      )}
    </>
  );
}

export default Navibar;
