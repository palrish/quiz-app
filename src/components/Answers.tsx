import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answeredState,
  onSelect,
}: any) {
  const shuffledAnswers: any = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer: any) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";
        if (answeredState === "answered" && isSelected) {
          cssClass = "answered";
        }
        if (answeredState === "correct" && isSelected) {
          cssClass = "correct";
        }
        if (answeredState === "wrong" && isSelected) {
          cssClass = "wrong";
        }
        return (
          <li className="answer" key={answer}>
            <button
              className={cssClass}
              disabled={answeredState !== ""}
              onClick={() => onSelect(answer)}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
