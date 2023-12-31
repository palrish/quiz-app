import { useState } from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import QUESTIONS from "../questions";

export default function Question({ index, onSkip, onSelectAnswer }: any) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;
  if (answer.selectedAnswer !== "") {
    timer = 500;
  }
  if (answer.isCorrect !== null) {
    timer = 750;
  }

  function handleSelectAnswer(answer: any) {
    setAnswer((prev: any) => {
      return {
        ...prev,
        selectedAnswer: answer,
      };
    });

    setTimeout(() => {
      setAnswer((prev: any) => {
        return {
          ...prev,
          isCorrect: answer === QUESTIONS[index].answers[0],
        };
      });
      setTimeout(() => {
        onSelectAnswer(answer);
      }, 750);
    }, 500);
  }
  let answeredState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answeredState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answeredState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeOut={timer}
        onTimeOut={answer.selectedAnswer !== "" ? null : onSkip}
        mode={answeredState}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        onSelect={handleSelectAnswer}
        answeredState={answeredState}
        selectedAnswer={answer.selectedAnswer}
      />
    </div>
  );
}
