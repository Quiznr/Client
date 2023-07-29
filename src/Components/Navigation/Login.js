import React, { useState } from "react";
import "../../css/login.css";

export default function Login() {
  const [isLoginActive, setIsLoginActive] = useState(true);
  const [whichIsActive, setWhichIsActive] = useState("login");
  const [agreeColor, setAgreeColor] = useState("white");
  const [textColor, setTextColor] = useState("white");

  const handleSwitchClick = () => {
    setIsLoginActive((prev) => !prev); // Toggle the state between login and signup

    if (isLoginActive) {
      setWhichIsActive("signup");
    } else {
      setWhichIsActive("login");
    }
  };

  const handleAgreeClick = () => {
    if (agreeColor === "white") {
      setAgreeColor("blue");
    } else {
      setAgreeColor("white");
    }
  };
  return (
    <>
      <div className="page">
        <div className="left">
          <div className="switch">
            <div className="switch-button">
              <div
                className="slider"
                style={{
                  transform: isLoginActive
                    ? "translateX(0)"
                    : "translateX(100%)",
                }}
              ></div>
              <div className="login-side" onClick={handleSwitchClick}>
                <p>Login</p>
              </div>

              <div className="signup-side" onClick={handleSwitchClick}>
                <p>Sign Up</p>
              </div>
            </div>
          </div>
          {whichIsActive === "login" ? (
            <>
              <h1>Login</h1>
              <form className="login">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
              </form>
            </>
          ) : (
            <>
              <h1>Sign Up</h1>
              <form className="login">
                <input type="email" placeholder="Email" />
                <input type="email" placeholder="Confirm Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <div className="agree">
                  <div className="agree-outer" onClick={handleAgreeClick}>
                    <div
                      className="agree-inner"
                      style={{ backgroundColor: `${agreeColor}` }}
                    ></div>
                  </div>
                  <p>
                    I agree to the <a href="#">Terms of Use</a>
                  </p>
                </div>
                <button type="submit">Login</button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
