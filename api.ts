import { IEmp } from "./types/employee"

const BASE_URL='http://localhost:3001'

export const getAllEmployees=async():Promise<IEmp[]>=>{
    const res = await fetch(`${BASE_URL}/employee`,{cache:'no-store'});
    const employee=await res.json();
    return employee;
}

export const addEmployee=async(employee:IEmp):Promise<IEmp>=>{
    const res = await fetch(`${BASE_URL}/employee`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(employee)
    })
    const newEmployee=await res.json();
    return newEmployee;
}
export const updateEmployee=async(employee:IEmp):Promise<IEmp>=>{
    const res = await fetch(`${BASE_URL}/employee/${employee.id}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(employee)
    })
    const updatedEmployee=await res.json();
    return updatedEmployee;
}