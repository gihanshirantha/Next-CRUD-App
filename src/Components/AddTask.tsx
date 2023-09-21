"use client";

import {BsFillPersonPlusFill} from 'react-icons/bs'
import Modal from './Modal'
import { FormEventHandler, useState } from 'react'

const AddTask = () => {

const [modalOpen,setModalOpen]=useState<boolean>(false);
const [newEmpValue,setNewEmpValue]=useState<string>('')
const [name, setName] = useState<string>("");
const [roll,setRoll]=useState<string>('');
const [salary,setSalary]=useState<string>('');


const handleSubmitNewEmployee:FormEventHandler<HTMLFormElement>=(e)=>{
    e.preventDefault();
    console.log(name,roll,salary);
}

  return (
    <div>
      <button onClick={()=>setModalOpen(true)} className="items-center bg-blue-500 py-2 w-full rounded-md text-white hover:bg-blue-700 transition flex justify-center">Add new Employee <BsFillPersonPlusFill className="ml-3" size={15}/></button>
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
            
            <form action="submit" onSubmit={handleSubmitNewEmployee}>
                <h2 className='font-bold text-lg text-center'>Add new Emplooyee</h2>
                <div className="modal-action flex-col items-center">
                <input  id='name'  onChange={e=>setName(e.target.value)} type="text" placeholder="Enter Name" className="input input-bordered w-full " />  
                 <input id='roll'  onChange={e=>setRoll(e.target.value)} type="text" placeholder="Enter Your Job Roll" className="input input-bordered w-full mt-5 " />
                <input id='salary'  onChange={e=>setSalary(e.target.value)} type="text" placeholder="Enter Salary" className="input input-bordered w-full mt-5 " /> 
                <button type='submit' className="btn btn-wide mt-5  bg-blue-500  text-white hover:bg-blue-700 transition">Submit</button>
                </div>
            </form>
        </Modal>
    </div>
  )
}

export default AddTask