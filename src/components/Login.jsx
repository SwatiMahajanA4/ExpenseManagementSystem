import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();

  const [isLoggedIn, setLoggedIn] = useState(false);

  const [username, setUsername] = useState("");
  const [passcode, setPasscode] = useState("");
  const [repasscode, setRepasscode] = useState("");

  const handleChange = function (event) {
    // console.log(event.target.id);
    // console.log(event.target.value);
    if (event.target.id === "username") {
      setUsername((prevState) => (prevState = event.target.value));
    } else if (event.target.id === "passcode") {
      setPasscode((prevState) => (prevState = event.target.value));
    } else {
      setRepasscode((prevState) => (prevState = event.target.value));
    }
  };

  const navigateToMainPage = function () {
    localStorage.setItem("isLoggedIn", isLoggedIn);
    navigate("/mainPage", { replace: true });
    console.log(username, passcode);
  };

  const handleLogin = function (event) {
    event.preventDefault();

    if (username === "" || passcode === "") {
      alert("Enter valid credentials");
      return;
    } else {
      setLoggedIn(true);
      navigateToMainPage();
    }
  };

  const handleSignup = function (event) {
    event.preventDefault();

    if (username === "" || passcode === "" || repasscode === "") {
      alert("Enter valid credentials");
      return;
    } else if (passcode !== repasscode) {
      alert("Passwords do not match. Please try again");
      return;
    } else {
      navigateToMainPage();
    }
  };

  const handleUserForm = function (event) {
    event.preventDefault();
    document
      .querySelector(".repasscode-component")
      .classList.toggle("custom-hidden");
    document.querySelector(".login-btn").classList.toggle("custom-hidden");
    document.querySelector(".signup-btn").classList.toggle("custom-hidden");
    document
      .querySelector(".new-user-button")
      .classList.toggle("custom-hidden");
    document
      .querySelector(".old-user-button")
      .classList.toggle("custom-hidden");
    document.querySelector(".login-heading").classList.toggle("custom-hidden");
    document.querySelector(".signup-heading").classList.toggle("custom-hidden");
  };

  return (
    <>
      <div className="loginform-container">
        <div className="login-form">
          <h2 className="login-heading">Login to continue</h2>
          <h2 className="signup-heading custom-hidden">
            Sign-up to get started
          </h2>
          <div className="form-component">
            <form action="submit">
              <div className="username-component">
                <input
                  className="form-inputs"
                  type="text"
                  id="username"
                  value={username}
                  placeholder="Username"
                  onChange={handleChange}
                />
                <br />
              </div>
              <div className="passcode-component">
                <input
                  className="form-inputs"
                  type="password"
                  id="passcode"
                  value={passcode}
                  placeholder="Passcode"
                  onChange={handleChange}
                />
                <br />
              </div>
              <div className="repasscode-component custom-hidden">
                <input
                  className="form-inputs"
                  type="password"
                  id="repasscode"
                  value={repasscode}
                  placeholder="Re-enter Passcode"
                  onChange={handleChange}
                />
                <br />
              </div>
              <button
                type="button"
                className="btn btn-outline-light custom-button login-page-button login-btn"
                onClick={handleLogin}
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-outline-light custom-button login-page-button signup-btn custom-hidden"
                onClick={handleSignup}
              >
                SignUp
              </button>
              <div>
                <button
                  type="button"
                  className="btn btn-outline-light new-user-button"
                  onClick={handleUserForm}
                >
                  New User?
                </button>
                <button
                  type="button"
                  className="btn btn-outline-light old-user-button custom-hidden"
                  onClick={handleUserForm}
                >
                  Already an user?
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
