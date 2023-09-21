"use client"
import {FaUserEdit} from 'react-icons/fa'
import {AiFillDelete} from 'react-icons/ai'
import { IEmp } from "../../types/employee"
import Modal from './Modal'
import { FormEventHandler, useState } from 'react'
import { updateEmployee } from '../../api';
import { useRouter } from 'next/navigation';

interface EmplooyeeProps{
    employee:IEmp;
}

const Employee:React.FC<EmplooyeeProps> = ({employee}) => {

    const router =useRouter()

    const [modalOpenEdit,setModalOpenEdit]=useState<boolean>(false);
    const [modalOpenDelete,setModalOpenDelete]=useState<boolean>(false);

    
    const [empname, setName] = useState<string>(employee.name);
    const [emproll,setRoll]=useState<string>(employee.job);
    const [empsalary,setSalary]=useState<string>(employee.salary)


const handleSubmitUpdateEmployee=()=>{

}


  return (
    
        <tr key={employee.id} className="bg-base-200">
        <th>{employee.id}</th>
        <td>{employee.name}</td>
        <td>{employee.job}</td>
        <td>{employee.salary}</td>
        <td className="flex gap-5">
            <FaUserEdit size={20} className="text-blue-500 cursor-pointer" onClick={()=>setModalOpenEdit(true)} />
            <Modal modalOpen={modalOpenEdit} setModalOpen={setModalOpenEdit}>
            
            <form action="submit" onSubmit={handleSubmitUpdateEmployee}>
                <h2 className='font-bold text-lg text-center'>Add new Emplooyee</h2>
                <div className="modal-action flex-col items-center">
                <input  id='empname' value={empname}  onChange={e=>setName(e.target.value)} type="text" placeholder="Enter Name" className="input input-bordered w-full " />  
                 <input id='emproll' value={emproll}  onChange={e=>setRoll(e.target.value)} type="text" placeholder="Enter Your Job Roll" className="input input-bordered w-full mt-5 " />
                <input id='empsalary' value={empsalary}  onChange={e=>setSalary(e.target.value)} type="number" placeholder="Enter Salary" className="input input-bordered w-full mt-5 " /> 
                <button type='submit'  className="btn btn-wide mt-5  bg-blue-500  text-white hover:bg-blue-700 transition">Submit</button>
                </div>
            </form>
        </Modal>
        <AiFillDelete className="text-red-500" size={20}/>
        </td>
      </tr>
    
  )
}

export default Employee