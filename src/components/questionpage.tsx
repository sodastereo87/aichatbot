import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const questions = ['What is the capital of France?', 'Who is the president of the United States?', '...'];

const QuestionPage: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleQuestionSelection = (question: string) => {
    setSelectedQuestion(question);
  };

  const handleNext = () => {
    if (selectedQuestion) {
      navigate(`/answer?question=${encodeURIComponent(selectedQuestion)}`);
    }
  };

  return (
    <div>
      <h1>Choose a Question</h1>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <button onClick={() => handleQuestionSelection(question)}>{question}</button>
          </li>
        ))}
      </ul>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default QuestionPage;
