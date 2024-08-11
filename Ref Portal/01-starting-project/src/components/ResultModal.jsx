import { useRef, forwardRef, useImperativeHandle } from "react";

export const ResultModal = forwardRef(function (
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  const userLost = remainingTime <= 0;
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost ? <h2>You lost!</h2> : <h2>Your score: {score}</h2>}
      <p>
        The target time was: <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stoped the timer with{" "}
        <strong>{(remainingTime / 1000).toFixed(2)} seconds left</strong>
      </p>
      ;
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});
