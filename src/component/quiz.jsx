import React, { useState } from 'react';
import Question from './Question';
import Submitted from './submitted';
import Button from './Button';

const questions = [
  {
    questionText: "What is the capital of Lagos?",
    options: ["Ikeja", "Osapa London", "Ikorodu", "Lakowe"],
    correctAnswer: "Ikeja"
  },
  {
    questionText: "Who is the Convener of Web3lagos conference?",
    options: ["Jeff Bezos", "CZ Binance", "Fredrico Stones", "Ayo Israel"],
    correctAnswer: "Ayo Israel"
  },
  {
    questionText: "In which city was web3lagos conference held?",
    options: ["Uyo", "Abuja", "Lagos", "Enugu"],
    correctAnswer: "Lagos"
  },
  {
    questionText: "How many years old is web3bridge?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "5"
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswerOptionClick = (option) => {
    setUserAnswers({
      ...userAnswers,
      [currentQuestion]: option,
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    return Object.keys(userAnswers).reduce((score, questionIndex) => {
      const question = questions[questionIndex];
      const userAnswer = userAnswers[questionIndex];
      return score + (userAnswer === question.correctAnswer ? 1 : 0);
    }, 0);
  };

  if (showResult) {
    return <Submitted score={calculateScore()} totalQuestions={questions.length} restartQuiz={() => window.location.reload()} />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-500">
      <div className="w-full max-w-xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-xl font-semibold mb-4">
          Question {currentQuestion + 1} / {questions.length}
        </h1>
        <Question
          questionText={questions[currentQuestion].questionText}
          options={questions[currentQuestion].options}
          userAnswer={userAnswers[currentQuestion]}
          handleAnswerOptionClick={handleAnswerOptionClick}
        />
        <div className="flex justify-between mt-6">
          <Button
            onClick={handlePreviousQuestion}
            // disabled={currentQuestion === 0}
            text="Previous"
            bgColor=""
          />
          <Button
            onClick={handleNextQuestion}
            text={currentQuestion === questions.length - 1 ? "Finish" : "Next"}
          />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
