import EmployeeFileInput from "./components/EmployeeFileInput";
import EmployeeTable from "./components/EmployeeTable";

export default function App() {
  return (
    <main className="min-h-screen min-w-max flex flex-col items-center bg-gray-100">
      <div className="md:w-[75%] sm:w-full flex flex-col items-center pt-12">
        <EmployeeFileInput />
        <EmployeeTable />
      </div>
    </main>
  );
}