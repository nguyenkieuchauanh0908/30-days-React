import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import Summary from "./Summary.jsx";
import Question from "./Question.jsx";
export default function Quiz() {
  const [userAnswers, setAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setAnswers((prev) => {
      return [...prev, selectedAnswer];
    });
  },
  []);

  const handleSkipQuestion = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipQuestion}
      />
    </div>
  );
}
