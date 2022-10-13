import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { BsFillPersonFill } from "react-icons/bs";


const SignIn = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }
  
  return (
    <div>
      <div className="center">
        <span className="iconRegnLogin">
          <BsFillPersonFill size={50} />
        </span>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="txt_field">
            <Form.Control
              className="form__input"
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <span></span>
            <label>Username</label>
          </div>
          <div className="txt_field">
            <Form.Control
              className="form__input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span></span>
            <label>Password</label>
          </div>
          <div className="btn__form">
            <button type="submit" className="form__btn">
              SignIn
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
