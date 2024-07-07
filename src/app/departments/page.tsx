import React from "react";
import { addDepartment } from "../api/departments/actions";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold p-10">Add Department Details</h1>
      <form
        action={addDepartment}
        className="space-y-4 p-4 max-w-md mx-auto bg-white rounded shadow-md"
      >
        <div className="flex flex-col">
          <label
            htmlFor="departmentName"
            className="font-medium text-gray-700 mb-1"
          >
            Department Name
          </label>
          <input
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            type="text"
            id="departmentName"
            name="department_name"
          />
        </div>

        <div className="flex flex-col">
          <label
            className="font-medium text-gray-700 mb-1"
            htmlFor="departmentCode"
          >
            Department Code
          </label>
          <input
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            type="text"
            id="departmentCode"
            name="department_code"
          />
        </div>

        <button className="w-full bg-blue-500 text-white font-medium py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Submit
        </button>
      </form>
    </main>
  );
};

export default page;
