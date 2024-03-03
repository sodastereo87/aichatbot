import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const AnswerPage: React.FC = () => {
  const location = useLocation();
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('Loading...');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const encodedQuestion = searchParams.get('question') || '';
    const decodedQuestion = decodeURIComponent(encodedQuestion);
    setQuestion(decodedQuestion);

    // Replace 'YOUR_OPENAI_API_KEY' with your actual OpenAI API key
    const openaiApiKey = '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';
    
    // Make a request to OpenAI API
    axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt: decodedQuestion,
        max_tokens: 150,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openaiApiKey}`,
        },
      }
    )
    .then((response) => {
      setAnswer(response.data.choices[0]?.text || 'No answer');
    })
    .catch((error) => {
      console.error('Error fetching answer from OpenAI:', error);
      setAnswer('Error fetching answer');
    });
  }, [location.search]);

  return (
    <div>
      <h1>Answer</h1>
      <p>Question: {question}</p>
      <p>Answer: {answer}</p>
    </div>
  );
};

export default AnswerPage;
