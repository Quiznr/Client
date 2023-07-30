import React, { useState } from "react";

export default function TopBar() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(true);
    setIsSideBarOpen(true);
  };

  const handleClose = () => {
    setIsButtonClicked(false);
    setIsSideBarOpen(false);
  };

  return (
    <>
      <div className="top-bar">
        <div className="top-bar-left">
          <h1>
            <a href="/">Quizy</a>
          </h1>
        </div>

        <div className="top-bar-right" onClick={handleButtonClick}>
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>

      {isButtonClicked && (
        <>
          {isSideBarOpen && (
            <div className="background" onClick={handleClose}></div>
          )}
          <div className="side-bar">
            <div className="side-bar-close" onClick={handleClose}>
              <i class="fa-solid fa-xmark"></i>
            </div>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="#">Quizzes</a>
              </li>
              <li>
                <a href="/Make-A-Quiz">Make A Quiz</a>
              </li>
              <li>
                <a href="#">Most Popular</a>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}
