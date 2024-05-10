import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import backgroundImg from "./seoul1.jpg";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConPassword, setConPassword] = useState("");

  const navigate = useNavigate();

  function inputEmail(event) {
    setEmail(event.target.value);
  }

  function inputName(event) {
    setName(event.target.value);
  }

  function inputPassword(event) {
    setPassword(event.target.value);
  }

  function inputConPassword(event) {
    setConPassword(event.target.value);
  }

  function submitInfo() {
    if (Email === "" || Name === "" || Password === "" || ConPassword === "") {
      // console.log(Email, Name, Password, ConPassword);
      return alert("All information must be provided");
    } else if (Password === ConPassword) {
      const body = { email: Email, name: Name, password: Password };
      // console.log(body, "here we go");
      // axios.get("http://localhost:7000");
      axios
        .post("http://localhost:7000/api/users/register", body, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data.success) {
            navigate("/signin");
          } else {
            if (!res.data.success) {
              return alert(`you already signed up before`);
            }
            return alert(`failed to signup`);
          }
          // console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      return alert(`Password should be same with Confirm Password`);
    }
  }

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
        <h1>Sign Up</h1>
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
          <Form.Label style={{ backgroundColor: "white" }}>Name</Form.Label>
          <Form.Control type="text" id="inputName" onChange={inputName} />
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
            onClick={submitInfo}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
