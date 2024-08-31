import { useState } from "react";
import { useRef } from "react";
import { Modal } from "./Modal";
export default function NewTask({ onAdd }) {
  const modalRef = useRef();
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask) {
      onAdd(enteredTask);
      setEnteredTask("");
    } else {
      modalRef.current.open();
    }
  }
  return (
    <>
      <Modal ref={modalRef} btnCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure to enter a value for all fields.
        </p>
      </Modal>
      <div className="flex items-center  gap-4">
        <input
          type="text"
          value={enteredTask}
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          onChange={handleChange}
        />
        <button
          onClick={handleClick}
          className="text-stone-700 hover:text-stone-800 mb-4"
        >
          <span> Add Tasks</span>
        </button>
      </div>
    </>
  );
}
