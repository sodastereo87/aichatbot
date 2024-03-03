import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionPage from './components/questionpage';
import AnswerPage from './components/answerpage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuestionPage />} />
        <Route path="/answer" element={<AnswerPage />} />
      </Routes>
    </Router>
  );
};

export default App;
