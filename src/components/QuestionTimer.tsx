import { time } from "console";
import { useEffect, useState } from "react";

export default function QuestionTimer({ mode, timeOut, onTimeOut }: any) {
  const [remainingTime, setRemainingTime] = useState(timeOut);
  useEffect(() => {
    const timer = setTimeout(onTimeOut, timeOut);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  useEffect(() => {
    const interval = setInterval(
      () =>
        setRemainingTime((prevRemainingTime: any) => prevRemainingTime - 10),
      10
    );
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <progress
      id="question-time"
      value={remainingTime}
      max={timeOut}
      className={mode}
    />
  );
}
