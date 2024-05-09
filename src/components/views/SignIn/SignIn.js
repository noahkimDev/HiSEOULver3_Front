import React, { useState } from "react";
import backgroundImg from "./seoul3.jpg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConPassword, setConPassword] = useState("");

  const inputEmail = function (event) {
    setEmail(event.target.value);
  };
  const inputPassword = function (event) {
    setPassword(event.target.value);
  };
  const inputConPassword = function (event) {
    setConPassword(event.target.value);
  };

  const submitLogin = function () {
    const body = { email: Email, password: Password };
    if (Password !== ConPassword) {
      return alert(`Error : Password is different with Confirm Password`);
    } else {
      axios
        .post("http://localhost:7000/api/users/signin", body, {
          withCredentials: true,
        })
        .then((res) => {
          // console.log(res.data.name);
          window.localStorage.setItem("userName", res.data.name);
          window.localStorage.setItem("userId", res.data.id);
          // navigate("/");
        })
        .then(() => {
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div>
      <div
        style={{
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          height: "100vh",
          display: "flex",
          padding: "150px",
          alignItems: "center",
          backgroundImage: `url('${backgroundImg}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1>SignIn</h1>
        <br />
        <div style={{ width: "300px" }}>
          <Form.Label style={{ backgroundColor: "white" }}>Email</Form.Label>
          <Form.Control
            type="email"
            id="inputEmail"
            placeholder="name@example.com"
            onChange={inputEmail}
          />
          <br />

          <Form.Label style={{ backgroundColor: "white" }}>Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword"
            onChange={inputPassword}
          />
          <br />
          <Form.Label style={{ backgroundColor: "white" }}>
            Confirm Password
          </Form.Label>
          <Form.Control
            type="password"
            id="inputConPassword"
            onChange={inputConPassword}
          />
          <br />
          <Button
            style={{ width: "100%", fontSize: "25px" }}
            onClick={submitLogin}
          >
            submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
