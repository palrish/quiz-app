import QUESTIONS from "../questions";

export default function Summary({ userAnswers }: any) {
  const skippedAnswers = userAnswers.filter((answer: any) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer: any, index: any) => answer === QUESTIONS[index].answers[0]
  );
  const skippedPercent = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctPercent = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongPercent = 100 - skippedPercent - correctPercent;
  return (
    <div id="summary">
      <img src="../../assets/quiz-complete.png" alt="quiz-completed" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedPercent}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctPercent}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongPercent}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer: any, index: any) => {
          let cssClass = "user-answer";
          if (answer == null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
