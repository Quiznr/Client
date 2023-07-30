import React, { useEffect } from "react";

export default function MakeQuiz() {
  useEffect(() => {
    fetch("https://quizner-backend-836f3d753759.herokuapp.com//home")
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
      <h1>Make a Quiz</h1>
    </div>
  );
}
