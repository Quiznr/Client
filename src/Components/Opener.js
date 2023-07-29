import React, { useState, useEffect } from "react";
import QuestionCards from "./QuestionCards";
import axios from "axios";

export default function Opener() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const quizzes = [
    {
      name: "JavaScript Quiz",
      difficulty: "Beginner",
      questions: 12,
      color: "blue",
    },
    {
      name: "HTML Quiz",
      difficulty: "Beginner",
      questions: 23,
      color: "red",
    },
    {
      name: "CSS Quiz",
      difficulty: "Intermediate",
      questions: 9,
      color: "green",
    },
    {
      name: "React Quiz",
      difficulty: "Expert",
      questions: 9,
      color: "purple",
    },
  ];

  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };

  return (
    <>
      <div className="opener">
        {quizzes.map((quiz) => (
          <div className="card">
            <a href="quiz" className="button" onClick={handleButtonClick}>
              <div
                className="background-button"
                style={{ backgroundColor: `${quiz.color}` }}
              ></div>
              <h3>{quiz.name}</h3>
              <p>Difficulty: {quiz.difficulty}</p>
              <p>Questions: {quiz.questions}</p>
            </a>
          </div>
        ))}
      </div>
      <p className="disclaimer">
        Note: This quiz is meant for entertainment purposes only and may contain
        difficult questions.
      </p>
    </>
  );
}
