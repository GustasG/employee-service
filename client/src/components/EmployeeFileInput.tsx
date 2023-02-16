import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";

import { uploadEmployeeFile } from "../api/employee";

export default function EmployeeFileInput() {
  const queryClient = useQueryClient();

  const mutation = useMutation(uploadEmployeeFile, {
    onSuccess: () => {
      queryClient.invalidateQueries("employees");
    },
    onError: () => {
      toast.error("Failed to upload file");
    }
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (!files) {
      return;
    }

    mutation.mutate(files[0]);
  };

  return (
    <>
      <input id="employee-file-input" type="file" accept=".csv" className="hidden" onChange={handleInput} />
      <label htmlFor="employee-file-input" className="border-b-2 bg-white p-3 hover:bg-gray-200 text-lg rounded cursor-pointer">
        Select file
      </label>
    </>
  );
}