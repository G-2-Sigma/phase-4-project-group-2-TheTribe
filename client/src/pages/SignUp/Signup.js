import React ,{useState}from "react";
import Form from "react-bootstrap/Form";
import { BsFillPersonFill } from "react-icons/bs";

const Signup = ({setUser}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [bio, setBio] = useState("");
    const [email, setEmail] = useState("");


    function handleSubmit(e) {
      e.preventDefault();
      fetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          bio,
          email,
          password,
          password_confirmation: passwordConfirmation,

        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
      });
    }

  return (
    <div className="mb-5">
      <div className="center sigUp">
        <span className="iconRegnLogin">
          <BsFillPersonFill size={50} />
        </span>
        <h1>Register</h1>
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
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <span></span>
            <label>Email</label>
          </div>
          <span></span>
          <label>Bio</label>
          <div className="txt_field">
            <Form.Control
              className="textAreaBio"
              as="textarea"
              placeholder="Give you nice bio"
              style={{ height: "100px" }}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
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
          <div className="txt_field">
            <Form.Control
              className="form__input"
              type="password"
              placeholder="Confirm Password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <span></span>
            <label>Confirm Password</label>
          </div>
          <div className="btn__form">
            <button type="submit" className="form__btn">
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
