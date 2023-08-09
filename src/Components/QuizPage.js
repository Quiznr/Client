import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function QuizPage() {
  const { id } = useParams(); // Get the quiz ID from the route
  const [quizData, setQuizData] = useState([]);

  const backendURL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    fetch(`${backendURL}/quiz/${id}`) // Construct the URL using the quiz ID
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setQuizData(data);
        console.log("Data", data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);
  return (
    <div className="quiz-page">
      <h1>Quiz Page</h1>
      <p style={{ color: "white" }}>Quiz Name: {quizData.quiz_name}</p>
    </div>
  );
}
