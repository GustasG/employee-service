import { useQuery } from "react-query";

import { fetchEmployees } from "../api/employee";

export default function EmployeeTable() {
  const { data, isLoading, isError } = useQuery("employees", fetchEmployees);

  if (isLoading) {
    return (
      <div className="w-full h-16 mt-8 mb-8 flex flex-col items-center justify-top">
        <span className="text-lg">Loading...</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full h-16 mt-8 mb-8 flex flex-col items-center justify-top">
        <span className="text-lg">Failed to fetch employee data</span>
      </div>
    );
  }

  return (
    <div className="w-full rounded-lg shadow mt-8 mb-8">
      <table className="w-full">
        <thead className="bg-gray-200 border-b-2 border-gray-200">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Name</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Email</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Phone</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data?.map((employee, i) => (
            <tr key={employee.id} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="p-3 text-sm text-gray-800">{employee.name}</td>
              <td className="p-3 text-sm text-gray-800">{employee.email}</td>
              <td className="p-3 text-sm text-gray-800">{employee.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}