import { allDepartments } from "../../data-access/departments";
import { allEmployees } from "../../data-access/employees";
import { allRoles } from "../../data-access/roles";

import { addEmployees, deleteEmployee } from "./api/employees/actions";

export default async function Home() {
  const employees = await allEmployees();
  const departments = await allDepartments();
  const roles = await allRoles();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold p-10">Add Employee Details</h1>
      <form
        action={addEmployees}
        className="space-y-4 p-4 max-w-md mx-auto bg-white rounded shadow-md"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="employeeName"
            name="employee_name"
            placeholder="Enter your name"
            className="border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="role" className="font-medium text-gray-700 mb-1">
            Role
          </label>
          <select
            id="employeeRole"
            name="employee_role"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {roles.map((role) => (
              <option key={role.id}>{role.roleName}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="department"
            className="font-medium text-gray-700 mb-1"
          >
            Department
          </label>
          <select
            id="employeeDepartment"
            name="employee_department"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {departments.map((department) => (
              <option key={department.id}>{department.departmentName}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>

      <div className="flex flex-col mt-8">
        <h1 className="text-2xl font-medium mb-4">Employees</h1>
        <div className="grid grid-cols-4 gap-4 bg-gray-200 p-4 rounded-md">
          <div className="font-semibold">Name</div>
          <div className="font-semibold">Role</div>
          <div className="font-semibold">Department</div>
          <div className="font-semibold">Actions</div>
        </div>
        <ul className="mt-2 space-y-2">
          {employees.map((employee) => (
            <li key={employee.id}>
              <div className="grid grid-cols-4 gap-4 bg-white p-4 rounded-md shadow">
                <p className="text-gray-700">{employee.employeeName}</p>
                <p className="text-gray-700">{employee.employeeRole}</p>
                <p className="text-gray-700">{employee.employeeDepartment}</p>
                <form action={deleteEmployee.bind(null, employee.id)}>
                  <button className="text-red-400">delete</button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
