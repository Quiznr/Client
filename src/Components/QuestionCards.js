import React, { useRef, useState, useEffect } from "react";

export default function QuestionCards() {
  const colors = [
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ffff00",
    "#ff00ff",
    "#00ffff",
    "#800000",
    "#008000",
    "#000080",
    "#808000",
    "#800080",
    "#008080",
    "#ff8080",
    "#80ff80",
    "#8080ff",
    "#ff8000",
    "#80ff00",
    "#0080ff",
    "#ff0080",
    "#80ff00",
    "#ff80ff",
    "#00ff80",
    "#8000ff",
    "#ff0080",
    "#8000ff",
    "#ff8000",
    "#0080ff",
    "#ff0080",
    "#ff00ff",
    "#00ffff",
    "#80ffff",
    "#800080",
    "#008080",
    "#80ff80",
    "#800080",
    "#ff8000",
    "#ff00ff",
    "#00ff80",
    "#8000ff",
    "#0080ff",
    "#ff0080",
    "#80ff00",
    "#80ff00",
    "#0080ff",
    "#80ffff",
    "#ff00ff",
    "#80ff80",
    "#8000ff",
    "#008080",
    "#ff8000",
    "#00ff80",
    "#ff0080",
    "#ff8000",
    "#80ff80",
    "#80ffff",
    "#ff00ff",
    "#8000ff",
    "#008080",
    "#ff8000",
    "#00ff80",
    "#ff0080",
    "#80ff00",
    "#80ff00",
    "#0080ff",
    "#80ffff",
    "#ff00ff",
    "#8000ff",
    "#008080",
    "#ff8000",
    "#00ff80",
    "#ff0080",
    "#80ff00",
    "#80ff00",
    "#0080ff",
    "#80ffff",
    "#ff00ff",
    "#8000ff",
    "#008080",
    "#ff8000",
    "#00ff80",
    "#ff0080",
    "#80ff00",
    "#80ff00",
    "#0080ff",
    "#80ffff",
    "#ff00ff",
    "#8000ff",
    "#008080",
    "#ff8000",
    "#00ff80",
    "#ff0080",
    "#80ff00",
    "#80ff00",
    "#0080ff",
    "#80ffff",
    "#ff00ff",
    "#8000ff",
    "#008080",
    "#ff8000",
    "#00ff80",
    "#ff0080",
    "#80ff00",
    "#80ff00",
    "#0080ff",
    "#80ffff",
    "#ff00ff",
    "#8000ff",
    "#008080",
    "#ff8000",
    "#00ff80",
    "#ff0080",
    "#80ff00",
    "#80ff00",
    "#0080ff",
    "#80ffff",
    "#ff00ff",
    "#8000ff",
    "#008080",
    "#ff8000",
    "#00ff80",
    "#ff0080",
    "#80ff00",
    "#80ff00",
    "#0080ff",
    "#80ffff",
    "#ff00ff",
    "#8000ff",
    "#008080",
    "#ff8000",
    "#00ff80",
    "#ff0080",
    "#80ff00",
    "#80ff00",
    "#0080ff",
    "#80ffff",
    "#ff00ff",
    "#8000ff",
    "#008080",
    "#ff8000",
    "#00ff80",
  ];
  const questions = [
    {
      question: "How long did it take to make JavaScript?",
      optionA: "10 Days",
      optionB: "12 Years",
      optionC: "3 Months",
      optionD: "2 Weeks",
      correctAnswer: "A",
    },
    {
      question: "What data type is a number",
      optionA: "Boolean",
      optionB: "String",
      optionC: "Integer",
      optionD: "Float",
      correctAnswer: "C",
    },
    {
      question: "How is JavaScript abbreviated?",
      optionA: "JS",
      optionB: "jscpt",
      optionC: "JSC",
      optionD: "JavS",
      correctAnswer: "A",
    },
    {
      question: "What data type return true or false?",
      optionA: "Integer",
      optionB: "String",
      optionC: "Boolean",
      optionD: "Float",
      correctAnswer: "C",
    },
    {
      question: "What year was JavaScript created?",
      optionA: "1983",
      optionB: "1995",
      optionC: "2016",
      optionD: "2001",
      correctAnswer: "B",
    },
    {
      question: "What is a closure in JavaScript?",
      optionA:
        "A function that has access to variables from its containing function.",
      optionB: "A method used to close the browser window.",
      optionC: "A built-in method for closing pop-up windows.",
      optionD: "A type of loop used for iterating through arrays.",
      correctAnswer: "A",
    },
    {
      question:
        "What is the difference between 'let' and 'const' in JavaScript?",
      optionA:
        "'let' is used for variables that can be reassigned, while 'const' is used for constants.",
      optionB:
        "'let' is used for asynchronous programming, while 'const' is used for synchronous programming.",
      optionC: "'let' is used for numbers, while 'const' is used for strings.",
      optionD: "'let' is used for objects, while 'const' is used for arrays.",
      correctAnswer: "A",
    },
    {
      question: "What is a callback function?",
      optionA:
        "A function passed as an argument to another function to be executed later.",
      optionB: "A function that is called immediately after its declaration.",
      optionC: "A function that is used for recursive programming.",
      optionD:
        "A function that is used for converting asynchronous code to synchronous code.",
      correctAnswer: "A",
    },
    {
      question: "What does 'this' refer to in JavaScript?",
      optionA: "The current instance of an object or class.",
      optionB: "The value of a variable declared in the global scope.",
      optionC: "A keyword used to import modules in ES6.",
      optionD: "The data type of a JavaScript variable.",
      correctAnswer: "A",
    },
    {
      question:
        "What is the library used for backend development in JavaScript?",
      optionA: "React",
      optionB: "Angular",
      optionC: "Node.js",
      optionD: "Vue",
      correctAnswer: "C",
    },
    {
      question: "What does the 'typeof' operator return for null?",
      optionA: "undefined",
      optionB: "object",
      optionC: "null",
      optionD: "number",
      correctAnswer: "B",
    },
    {
      question: "What is the result of the expression '5' + 2?",
      optionA: "52",
      optionB: "7",
      optionC: "Error",
      optionD: "NaN",
      correctAnswer: "A",
    },
  ];

  const [isCurrentAnswerCorrect, setIsCurrentAnswerCorrect] = useState(null);
  const [isNextClicked, setIsNextClicked] = useState(false); // Add a new state variable for tracking "Next" button click

  let [pixels, setPixels] = useState(900); // Keep track of the number of pixels to translate the question cards
  const [score, setScore] = useState(0);

  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true); // Start with the "Next" button disabled
  const [selectedAnswer, setSelectedAnswer] = useState(
    Array(questions.length).fill("")
  ); // Keep track of the selected answer
  const [clickedAnswer, setClickedAnswer] = useState(
    Array(questions.length).fill(false)
  );

  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const [showComponent, setShowComponent] = useState(false);

  const [isCurrentQuestionAnswered, setIsCurrentQuestionAnswered] =
    useState(false);

  const checkAnswer = (answer, e) => {
    if (isCurrentQuestionAnswered) {
      return; // If the current question is already answered correctly, do not allow further selection
    }

    setSelectedAnswer((prevSelectedAnswers) => {
      const newSelectedAnswers = [...prevSelectedAnswers];
      newSelectedAnswers[currentIndex] = answer;
      return newSelectedAnswers;
    });

    const isCorrect = answer === questions[currentIndex].correctAnswer;
    if (isCorrect && !isCurrentQuestionAnswered) {
      setIsCurrentQuestionAnswered(true);
      setScore((prevScore) => prevScore + 1);
    }

    setIsAnswerCorrect(isCorrect);
    setIsCurrentAnswerCorrect(isCorrect);

    // Mark the clicked answer as true in the clickedAnswer state
    setClickedAnswer((prevClickedAnswer) => {
      const newClickedAnswer = [...prevClickedAnswer];
      newClickedAnswer[currentIndex] = true;
      return newClickedAnswer;
    });

    setIsNextButtonDisabled(false);
  };

  useEffect(() => {
    console.log(pixels);
  }, [pixels]);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setIsNextButtonDisabled(true); // Disable the "Next" button when proceeding to the next question
    setSelectedAnswer(""); // Clear the selected answer for the next question
    setIsAnswerCorrect(null); // Clear the answer status for the next question
    setIsCurrentQuestionAnswered(false);
    setIsCurrentAnswerCorrect(null);
    setIsNextClicked(true); // Set isNextClicked to true when the "Next" button is clicked

    setActiveCardIndex(currentIndex + 1);

    const containerWidth =
      questions.length * pixels + 20 * (questions.length - 1);
    const cardWidth = pixels + 20;

    // Calculate the translation value to center the active card
    const centerTranslation = (containerWidth - cardWidth) / -2;

    // Apply the translation to the container
    setActiveCardIndex(currentIndex + 1);
    setPixels(centerTranslation);
  };

  const handleFinishClick = () => {
    setShowComponent(true);
  };

  const getCorrectAnswerLetter = () => {
    return questions[currentIndex].correctAnswer;
  };

  const isLastQuestion = currentIndex === questions.length - 1;
  //   const spaceBetweenCards = (window.innerWidth - pixels) / 2 - 20;

  useEffect(() => {
    if (window.innerWidth < 800) {
      setPixels(750);
    } else if (window.innerWidth < 420) {
      setPixels(75);
    } else if (window.innerWidth > 1900) {
      setPixels(1710);
    } else if (window.innerWidth < 1007) {
      setPixels(968);
    } else if (window.innerWidth < 1500) {
      setPixels(1055);
    } else {
      setPixels(900);
    }
  });

  return (
    <>
      <div className="main">
        <h1>{`${currentIndex + 1}/${questions.length}`}</h1>
      </div>
      <div className="question-cards-outer-container">
        <div
          className="question-cards-container"
          //   style={{
          //     transform: `translateX(-${currentIndex * pixels}px)`,
          //     transition: "transform 1s ease-in-out",
          //   }}
        >
          {questions.map((question, index) => (
            <div
              key={index}
              className={`question-card ${
                index === activeCardIndex ? "active-card" : ""
              }`}
              style={{
                transform: `translateX(-${currentIndex * pixels}px)`,
                transition: "transform 1s ease-in-out",
              }}
            >
              <div
                className="question-cards-background"
                style={{ backgroundColor: colors[index] }}
              ></div>
              <div className="question-content">
                <h2>{question.question}</h2>
                <p
                  onClick={(e) => checkAnswer("A", e)}
                  className={`${
                    selectedAnswer[currentIndex] === "A" &&
                    isCurrentAnswerCorrect !== null
                      ? isCurrentAnswerCorrect
                        ? "selected-correct"
                        : "selected-incorrect"
                      : ""
                  } ${clickedAnswer[currentIndex] ? "clicked-answer" : ""}`}
                  disabled={isNextButtonDisabled}
                >
                  <span>
                    <span className="letter">A</span>
                  </span>
                  {question.optionA}
                </p>
                <p
                  onClick={(e) => checkAnswer("B", e)}
                  className={`${
                    selectedAnswer[currentIndex] === "B" &&
                    isCurrentAnswerCorrect !== null
                      ? isCurrentAnswerCorrect
                        ? "selected-correct"
                        : "selected-incorrect"
                      : ""
                  } ${clickedAnswer[currentIndex] ? "clicked-answer" : ""}`}
                  disabled={isNextButtonDisabled}
                >
                  <span>
                    <span className="letter">B</span>
                  </span>
                  {question.optionB}
                </p>
                <p
                  onClick={(e) => checkAnswer("C", e)}
                  className={`${
                    selectedAnswer[currentIndex] === "C" &&
                    isCurrentAnswerCorrect !== null
                      ? isCurrentAnswerCorrect
                        ? "selected-correct"
                        : "selected-incorrect"
                      : ""
                  } ${clickedAnswer[currentIndex] ? "clicked-answer" : ""}`}
                  disabled={isNextButtonDisabled}
                >
                  <span>
                    <span className="letter">C</span>
                  </span>
                  {question.optionC}
                </p>
                <p
                  onClick={(e) => checkAnswer("D", e)}
                  className={`${
                    selectedAnswer[currentIndex] === "D" &&
                    isCurrentAnswerCorrect !== null
                      ? isCurrentAnswerCorrect
                        ? "selected-correct"
                        : "selected-incorrect"
                      : ""
                  } ${clickedAnswer[currentIndex] ? "clicked-answer" : ""}`}
                  disabled={isNextButtonDisabled}
                >
                  <span>
                    <span className="letter">D</span>
                  </span>
                  {question.optionD}
                </p>

                {/* Conditionally render the "Correct" or "Incorrect" paragraph element */}
                {isNextButtonDisabled && isCurrentAnswerCorrect !== null && (
                  <div className="incorrect-correct">
                    <p>
                      {isCurrentAnswerCorrect
                        ? "Correct!"
                        : `Incorrect! The correct answer is ${questions[currentIndex].correctAnswer}.`}
                    </p>
                  </div>
                )}

                {/* Disabling and enabling the Next button */}
                {index !== questions.length - 1 && (
                  <button
                    className="next-button"
                    onClick={handleNextClick}
                    disabled={isNextButtonDisabled}
                  >
                    <i class="fa-solid fa-arrow-right"></i>
                  </button>
                )}

                {/* Disabling and enabling the finish button on the last card */}
                {index === questions.length - 1 && (
                  <button
                    className="finish-button"
                    onClick={handleFinishClick}
                    disabled={isNextButtonDisabled}
                  >
                    <i class="fa-solid fa-check"></i>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Score Page */}
      {showComponent && (
        <div
          className={`custom-component ${
            showComponent ? "show-transition" : ""
          }`}
        >
          <div className="score-bar">
            <div
              className="score-bar-inner"
              style={{
                background: `conic-gradient(#00ff00 ${
                  (score / questions.length) * 360
                }deg, #cccccc ${(score / questions.length) * 360}deg)`,
              }}
            ></div>
            <div className="inner-cover">
              <h1 className="score-slash">
                {score}/{questions.length}
              </h1>
              <hr style={{ width: "75%", position: "relative", top: "15px" }} />
              <h1 className="percentage">
                {((score / questions.length) * 100).toFixed(0)}%
              </h1>
            </div>
          </div>

          <div className="buttons">
            <a href="/quiz" className="button-component">
              Restart
            </a>
            <a
              href="/"
              className="button-component"
              style={{ marginInlineStart: "20px" }}
            >
              Home
            </a>
          </div>
        </div>
      )}
    </>
  );
}
