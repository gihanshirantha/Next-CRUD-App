import { IEmp } from "../../types/employee"

import Employee from "./Employee"



interface EmployeeProps{
    employee:IEmp[]
}

const EmployeeList:React.FC<EmployeeProps> = ({employee}) => {
  return (
    <div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th>Options</th>
      </tr>
    </thead>
    <tbody>
     {employee.map((employe)=>
        <Employee key={employe.id} employee={employe}/>
     )}
      
      
    </tbody>
  </table>
</div>
    </div>
  )
}

export default EmployeeList