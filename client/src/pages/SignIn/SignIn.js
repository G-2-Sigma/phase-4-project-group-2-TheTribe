import React from "react";
import Form from "react-bootstrap/Form";
import { BsFillPersonFill } from "react-icons/bs";


const SignIn = () => {
  return (
    <div>
      <div className="center">
        <span className="iconRegnLogin">
          <BsFillPersonFill size={50} />
        </span>
        <h1>Login</h1>
        <form method="post">
          <div className="txt_field">
            <Form.Control
              className="form__input"
              type="text"
              placeholder="Enter email"
            />

            <span></span>
            <label>Username</label>
          </div>
          <div className="txt_field">
            <Form.Control
              className="form__input"
              type="password"
              placeholder="Password"
            />
            <span></span>
            <label>Password</label>
          </div>
          <div className="btn__form">
            <button className="form__btn">SignIn</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
