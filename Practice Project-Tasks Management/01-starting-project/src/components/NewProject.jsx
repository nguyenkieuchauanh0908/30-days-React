import { useRef } from "react";
import { Input } from "./Input";
export default function NewProject({ onAddNewProject }) {
  const titleRef = useRef();
  const descRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDesc = descRef.current.value;
    const enteredDuedate = dueDateRef.current.value;

    //Validate data
    onAddNewProject({
      title: enteredTitle,
      description: enteredDesc,
      dueDate: enteredDuedate,
    });
  }

  return (
    <div className="w-[35rem] mt-16 mx-auto">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="px-6 py-2 bg-stone-800 text-stone-100 rounded-md hover:bg-stobe-950">
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
  );
}
