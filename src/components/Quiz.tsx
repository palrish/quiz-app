import { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const currentQuestionIndex = userAnswers.length;

  const quizIsCompleted = currentQuestionIndex === QUESTIONS.length;
  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer: any
  ) {
    setUserAnswers((prevAnswers): any => {
      return [...prevAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsCompleted) {
    return <Summary userAnswers={userAnswers} />;
  }

  const shuffledAnswers = [...QUESTIONS[currentQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <Question
        key={currentQuestionIndex}
        index={currentQuestionIndex}
        onSkip={handleSkipAnswer}
        onSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
}
