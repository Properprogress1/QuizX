import React from 'react';
import Button from './Button';

const Submitted = ({ score, totalQuestions, restartQuiz }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Your Score: {score} / {totalQuestions}</h1>
      <Button
        onClick={restartQuiz}
        text="Restart Quiz"
        bgColor="bg-green-500"
      />
    </div>
  );
};

export default Submitted;
