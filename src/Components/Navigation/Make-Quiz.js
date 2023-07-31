import React, { useEffect } from "react";
import "../../css/quiz.css";

export default function MakeQuiz() {
  useEffect(() => {
    fetch("/home")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="makequiz-page">
      <h1 style={{ color: "white" }}>Make a Quiz</h1>
      {/* <div className="form">
        <form className="makequiz" method="POST" action="/home">
          <input type="text" placeholder="Quiz Name" name="Quiz Name" />
          <input type="text" placeholder="Quiz Description" />
          <input type="text" placeholder="Quiz Category" />
          <input type="text" placeholder="Quiz Difficulty" />
          <button type="submit">Make Quiz</button>
        </form>
      </div> */}
    </div>
  );
}
