import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopBar from "./Components/TopBar";
import Opener from "./Components/Opener";
import Login from "./Components/Navigation/Login";
import MakeQuiz from "./Components/Navigation/Make-Quiz";
import QuizPage from "./Components/QuizPage";
import "./App.css";
import "./css/queries.css";
import QuestionCards from "./Components/QuestionCards";

function App() {
  const [backendData, setBackendData] = useState([]);

  const backendURL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    fetch(`${backendURL}/home`)
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

  return (
    <div className="App">
      <TopBar />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Opener backendData={backendData} backendURL={backendURL} />
            }
          />
          <Route path="/quiz" element={<QuestionCards />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/Make-A-Quiz"
            element={
              <MakeQuiz backendData={backendData} backendURL={backendURL} />
            }
          />
          <Route
            path="/quiz/:id"
            element={
              <QuizPage backendData={backendData} backendURL={backendURL} />
            }
          />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
