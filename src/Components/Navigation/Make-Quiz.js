import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/quiz.css";

export default function MakeQuiz({ backendData, backendURL }) {
  console.log(backendData);
  const [formData, setFormData] = useState({
    quiz_name: "",
    quiz_description: "",
    quiz_category: "",
    quiz_difficulty: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${backendURL}/home`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Handle the response from the server, if needed
        // Optionally, you can reset the form fields after successful submission:
        setFormData({
          quiz_name: "",
          quiz_description: "",
          quiz_category: "",
          quiz_difficulty: "",
        });
      })
      .catch((error) => {
        console.error("Error submitting quiz:", error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleQuizClick = (quizId) => {
    alert(`Clicked on quiz with ID: ${quizId}`);
  };

  return (
    <div className="makequiz-page">
      <h1 style={{ color: "white" }}>Make a Quiz</h1>
      <form className="makequiz-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="quiz_name"
          value={formData.quiz_name}
          placeholder="Quiz Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="quiz_description"
          value={formData.quiz_description}
          placeholder="Quiz Description"
          onChange={handleChange}
        />
        <input
          type="text"
          name="quiz_category"
          value={formData.quiz_category}
          placeholder="Quiz Category"
          onChange={handleChange}
        />
        <input
          type="text"
          name="quiz_difficulty"
          value={formData.quiz_difficulty}
          placeholder="Quiz Difficulty"
          onChange={handleChange}
        />
        <button type="submit">Submit Quiz</button>
      </form>

      <div className="quiz-list">
        {/* {backendData.map((quiz) => (
          // <Link to={`${backendURL}/quiz/${quiz.id}`} key={quiz.id}>
          //   <div className="quiz-card" key={quiz.id}>
          //     <h2>{quiz.quiz_name}</h2>
          //     <p>{quiz.quiz_description}</p>
          //   </div>
          // </Link>
        ))} */}
      </div>
    </div>
  );
}
