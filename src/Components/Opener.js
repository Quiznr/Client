import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QuestionCards from "./QuestionCards";
import axios from "axios";

export default function Opener({ backendData, backendURL }) {
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
        {backendData.map((quiz) => (
          <div className="card">
            <Link to={`/quiz/${quiz.id}`} key={quiz.id} className="button">
              <div
                className="background-button"
                style={{ backgroundColor: `${quiz.color}` }}
              ></div>
              <h3>{quiz.quiz_name}</h3>
              <p>Difficulty: {quiz.quiz_difficulty}</p>
              <p>Questions: {quiz.questions}</p>
            </Link>
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
