import { useState, useRef } from "react";
import { ResultModal } from "./ResultModal";
export default function TimerChallenge({ title, targetTime }) {
  let timer = useRef();
  let dialog = useRef();
  const [remainingTime, setRemainingTime] = useState(targetTime * 1000);
  const timerActive = remainingTime > 0 && remainingTime < targetTime * 1000;

  if (remainingTime <= 0) {
    dialog.current.open();
    clearInterval(timer.current);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setRemainingTime((prevRemainingTime) => {
        return prevRemainingTime - 10;
      });
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  function handleReset() {
    setRemainingTime(targetTime * 1000);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={remainingTime}
        onReset={handleReset}
      />

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerActive ? handleStop : handleStart}>
            {timerActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerActive ? "active" : ""}>
          {timerActive ? "Time is running..." : "Timer is inactive!"}
        </p>
      </section>
    </>
  );
}
