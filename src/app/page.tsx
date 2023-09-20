import AddTask from "@/Components/AddTask"
import EmployeeList from "@/Components/EmployeeList"
import Header from "@/Components/Header"



export default function Home() {
  return (
    <main className="max-w-4xl mt-4 mx-auto">
      <Header/>
      <AddTask/>
      <EmployeeList/>
    </main>
    
  )
}
