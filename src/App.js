import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopBar from "./Components/TopBar";
import Opener from "./Components/Opener";
import Login from "./Components/Navigation/Login";
import MakeQuiz from "./Components/Navigation/Make-Quiz";
import "./App.css";
import "./css/queries.css";
import QuestionCards from "./Components/QuestionCards";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Router>
        <Routes>
          <Route path="/" element={<Opener />} />
          <Route path="/quiz" element={<QuestionCards />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Make-A-Quiz" element={<MakeQuiz />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
