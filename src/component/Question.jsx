import React from 'react';

const Question = ({ questionText, options, userAnswer, handleAnswerOptionClick }) => {
  return (
    <div>
      <p className="text-lg mb-6">{questionText}</p>
      <div className="flex flex-col space-y-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerOptionClick(option)}
            className={`px-4 py-2 text-left rounded-lg border ${
              userAnswer === option ? "bg-blue-500 text-white" : "bg-gray-100"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
