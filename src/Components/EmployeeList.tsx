import { IEmp } from "../../types/employee"



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
      </tr>
    </thead>
    <tbody>
     {employee.map(employe=>(
        <tr key={employe.id} className="bg-base-200">
        <th>{employe.id}</th>
        <td>{employe.name}</td>
        <td>{employe.job}</td>
        <td>{employe.salary}</td>
      </tr>
     ))}
      
      
    </tbody>
  </table>
</div>
    </div>
  )
}

export default EmployeeList