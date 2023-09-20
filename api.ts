import { IEmp } from "./types/employee"

const BASE_URL='http://localhost:3001'

export const getAllEmployees=async():Promise<IEmp[]>=>{
    const res = await fetch(`${BASE_URL}/employee`);
    const employee=await res.json();
    return employee;
}