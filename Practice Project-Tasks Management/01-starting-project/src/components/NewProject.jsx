import { useRef } from "react";
import { Input } from "./Input";
import { Modal } from "./Modal";
export default function NewProject({ onAddNewProject, onCancel }) {
  const titleRef = useRef();
  const descRef = useRef();
  const dueDateRef = useRef();
  const modalRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDesc = descRef.current.value;
    const enteredDuedate = dueDateRef.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDesc.trim() === "" ||
      enteredDuedate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }

    onAddNewProject({
      title: enteredTitle,
      description: enteredDesc,
      dueDate: enteredDuedate,
    });
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
      <Modal ref={modalRef} btnCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure to enter a value for all fields.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="px-6 py-2 bg-stone-800 text-stone-100 rounded-md hover:bg-stobe-950"
            >
              Cancle
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2  rounded-md hover:bg-stobe-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={titleRef} label="Title" type="text" isTextarea={false} />
          <Input ref={descRef} label="Description" isTextarea={true} />
          <Input
            ref={dueDateRef}
            label="Due date"
            type="date"
            isTextarea={false}
          />
        </div>
      </div>
    </>
  );
}
