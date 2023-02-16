import axios from "axios";

import config from "../config";

export type Employee = {
  id: string,
  name?: string,
  email?: string,
  phone?: string
};

const employeeApiClient = axios.create({
  baseURL: `${config.serverBaseUrl}/api/employee`
});

export function fetchEmployees(): Promise<Employee[]> {
  return employeeApiClient.get("")
    .then(res => res.data);
}

export function uploadEmployeeFile(file: File): Promise<void> {
  const formData = new FormData();
  formData.append("file", file)

  return employeeApiClient.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
}