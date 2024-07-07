"use client";

import { addTasks } from "@/app/api/tasks/actions";
import React from "react";
import { useRef } from "react";

function Form() {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={ref}
      action={async (formData) => {
        await addTasks(formData);
        ref.current?.reset();
      }}
      className="flex flex-col gap-y-2"
    >
      <input
        type="text"
        id="taskName"
        name="task_name"
        placeholder="Enter task"
        className="py-2 px-3 rounded-sm"
      />

      <button className="bg-blue-500 text-white py-2 px-3 rounded-sm">
        Submit
      </button>
    </form>
  );
}

export default Form;
