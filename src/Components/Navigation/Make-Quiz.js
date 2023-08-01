import React, { useEffect, useState } from "react";
import "../../css/quiz.css";

export default function MakeQuiz() {
  const [backendData, setBackendData] = useState([]);

  const backendURL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    fetch(`${backendURL}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setBackendData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [formData, setFormData] = useState({
    quiz_name: "",
    quiz_description: "",
    quiz_category: "",
    quiz_difficulty: "",
    quiz_score: "",
    quiz_high_score: "",
  });

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   fetch(`${backendURL}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data); // Handle the response from the server, if needed
  //       // Optionally, you can reset the form fields after successful submission:
  //       setFormData({
  //         quiz_name: "",
  //         quiz_description: "",
  //         quiz_category: "",
  //         quiz_difficulty: "",
  //         quiz_score: "",
  //         quiz_high_score: "",
  //       });
  //     })
  //     .catch((error) => {
  //       console.error("Error submitting quiz:", error);
  //     });
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="makequiz-page">
      <h1 style={{ color: "white" }}>Make a Quiz</h1>
    </div>
  );
}
