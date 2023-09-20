import AddTask from "@/Components/AddTask"
import EmployeeList from "@/Components/EmployeeList"
import Header from "@/Components/Header"
import { getAllEmployees } from "../../api"



export default async function Home() {
  const employee=await getAllEmployees();
  
  return (
    <main className="max-w-4xl mt-4 mx-auto">
      <Header/>
      <AddTask/>
      <EmployeeList employee={employee}/>
    </main>
    
  )
}
