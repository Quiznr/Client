import React, { useEffect } from "react";
import "../../css/quiz.css";

export default function MakeQuiz() {
  useEffect(() => {
    fetch("https://quizner-backend-836f3d753759.herokuapp.com/home")
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
    </div>
  );
}
